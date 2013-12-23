

package com.donnfelker.android.bootstrap.ui;

import android.content.res.Resources;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;

import com.donnfelker.android.bootstrap.R;

/**
 * Pager adapter
 */
public class BootstrapPagerAdapter extends FragmentPagerAdapter {

    private final Resources resources;

    /**
     * Create pager adapter
     *
     * @param resources
     * @param fragmentManager
     */
    public BootstrapPagerAdapter(Resources resources, FragmentManager fragmentManager) {
        super(fragmentManager);
        this.resources = resources;
    }

    @Override
    public int getCount() {
        return 3;
    }

    @Override
    public Fragment getItem(int position) {
        Bundle bundle = new Bundle();
        switch (position) {
        case 0:
            Top10Fragment f1 = new Top10Fragment();
            f1.setArguments(bundle);
            return f1;
        case 1:
            HotSpotFragment hotSpotAdapter = new HotSpotFragment();
            hotSpotAdapter.setArguments(bundle);
            return hotSpotAdapter;
        case 2:
            CheckInsListFragment checkInsFragment = new CheckInsListFragment();
            checkInsFragment.setArguments(bundle);
            return checkInsFragment;
        default:
            return null;
        }
    }

    @Override
    public CharSequence getPageTitle(int position) {
        switch (position) {
        case 0:
            return "十大";
            //return resources.getString(R.string.page_news);
        case 1:
            return "近期热帖";
            //return resources.getString(R.string.page_users);
        case 2:
            return "汽车世界";
            //return resources.getString(R.string.page_checkins);
        default:
            return null;
        }
    }
}
