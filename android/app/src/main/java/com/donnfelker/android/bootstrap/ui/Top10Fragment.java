package com.donnfelker.android.bootstrap.ui;

import static com.donnfelker.android.bootstrap.core.Constants.Extra.NEWS_ITEM;
import static com.donnfelker.android.bootstrap.core.Constants.Extra.TOPIC_INFO;

import android.accounts.OperationCanceledException;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.content.Loader;
import android.view.View;
import android.widget.ListView;

import com.donnfelker.android.bootstrap.BootstrapApplication;
import com.donnfelker.android.bootstrap.BootstrapServiceProvider;
import com.donnfelker.android.bootstrap.Injector;
import com.donnfelker.android.bootstrap.R;
import com.donnfelker.android.bootstrap.authenticator.LogoutService;
import com.donnfelker.android.bootstrap.core.News;
import com.donnfelker.android.bootstrap.core.TopicInfo;
import com.github.kevinsawicki.wishlist.SingleTypeAdapter;
import javax.inject.Inject;

import java.util.Collections;
import java.util.List;

public class Top10Fragment extends ItemListFragment<TopicInfo> {

    @Inject protected BootstrapServiceProvider serviceProvider;
    @Inject protected LogoutService logoutService;


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Injector.inject(this);
    }

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        setEmptyText(R.string.no_top10);


    }

    @Override
    protected void configureList(Activity activity, ListView listView) {
        super.configureList(activity, listView);

        listView.setFastScrollEnabled(true);
        listView.setDividerHeight(0);

        getListAdapter()
                .addHeader(activity.getLayoutInflater()
                        .inflate(R.layout.news_list_item_labels, null));
    }

    @Override
    LogoutService getLogoutService() {
        return logoutService;
    }

    @Override
    public void onDestroyView() {
        setListAdapter(null);

        super.onDestroyView();
    }

    @Override
    public Loader<List<TopicInfo>> onCreateLoader(int id, Bundle args) {
        final List<TopicInfo> initialItems = items;
        return new ThrowableLoader<List<TopicInfo>>(getActivity(), items) {

            @Override
            public List<TopicInfo> loadData() throws Exception {
                try {
                    if(getActivity() != null) {
                        return serviceProvider.getService(getActivity()).getTop10();
                    } else {
                        return Collections.emptyList();
                    }

                } catch (OperationCanceledException e) {
                    Activity activity = getActivity();
                    if (activity != null)
                        activity.finish();
                    return initialItems;
                }
            }
        };
    }

    @Override
    protected SingleTypeAdapter<TopicInfo> createAdapter(List<TopicInfo> items) {
        return new Top10Adapter(getActivity().getLayoutInflater(), items);
    }

    public void onListItemClick(ListView l, View v, int position, long id) {
        TopicInfo t = ((TopicInfo) l.getItemAtPosition(position));

        startActivity(new Intent(getActivity(), TopicActivity.class).putExtra(TOPIC_INFO, t));
    }

    @Override
    protected int getErrorMessage(Exception exception) {
        return R.string.error_loading;
    }
}
