

package com.donnfelker.android.bootstrap.ui;

import android.accounts.OperationCanceledException;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.view.ViewPager;
import android.view.View;

import com.actionbarsherlock.view.MenuItem;
import com.actionbarsherlock.view.Window;
import com.donnfelker.android.bootstrap.BootstrapServiceProvider;
import com.donnfelker.android.bootstrap.R;
import com.donnfelker.android.bootstrap.core.BootstrapService;
import com.donnfelker.android.bootstrap.util.SafeAsyncTask;
import com.viewpagerindicator.TabPageIndicator;
import com.viewpagerindicator.TitlePageIndicator;

import javax.inject.Inject;

import butterknife.InjectView;
import butterknife.Views;
import net.simonvt.menudrawer.MenuDrawer;


/**
 * Activity to view the carousel and view pager indicator with fragments.
 */
public class CarouselActivity extends BootstrapFragmentActivity {

    @InjectView(R.id.tpi_header) TabPageIndicator indicator;
    @InjectView(R.id.vp_pages) ViewPager pager;

    @Inject BootstrapServiceProvider serviceProvider;

    private MenuDrawer menuDrawer;

    private boolean userHasAuthenticated = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        requestWindowFeature(Window.FEATURE_INDETERMINATE_PROGRESS);

        super.onCreate(savedInstanceState);

        // Set up navigation drawer
        menuDrawer = MenuDrawer.attach(this);
        menuDrawer.setMenuView(R.layout.navigation_drawer);
        menuDrawer.setContentView(R.layout.carousel_view);
        menuDrawer.setSlideDrawable(R.drawable.ic_drawer);
        menuDrawer.setDrawerIndicatorEnabled(true);

        Views.inject(this);

        //checkAuth();
        userHasAuthenticated = true;
        initScreen();
    }

    private void initScreen() {
        if(userHasAuthenticated) {
            pager.setAdapter(new BootstrapPagerAdapter(getResources(), getSupportFragmentManager()));

            indicator.setViewPager(pager);
            pager.setCurrentItem(0);

        }

        setNavListeners();
    }

    private void checkAuth() {
        new SafeAsyncTask<Boolean>() {

            @Override
            public Boolean call() throws Exception {
                    final BootstrapService svc = serviceProvider.getService(CarouselActivity.this);
                    return svc != null;

            }

            @Override
            protected void onException(Exception e) throws RuntimeException {
                super.onException(e);
                if(e instanceof OperationCanceledException) {
                    // User cancelled the authentication process (back button, etc).
                    // Since auth could not take place, lets finish this activity.
                    finish();
                }
            }

            @Override
            protected void onSuccess(Boolean hasAuthenticated) throws Exception {
                super.onSuccess(hasAuthenticated);
                userHasAuthenticated = true;
                initScreen();
            }
        }.execute();
    }


    private void setNavListeners() {

        menuDrawer.findViewById(R.id.home).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                menuDrawer.toggleMenu();
            }
        });

        menuDrawer.findViewById(R.id.timer).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                menuDrawer.toggleMenu();
                navigateToTimer();
            }
        });

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch(item.getItemId()) {
            case android.R.id.home:
                menuDrawer.toggleMenu();
                return true;
            case R.id.timer:
                navigateToTimer();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    private void navigateToTimer() {
        final Intent i = new Intent(this, BootstrapTimerActivity.class);
        startActivity(i);
    }
}
