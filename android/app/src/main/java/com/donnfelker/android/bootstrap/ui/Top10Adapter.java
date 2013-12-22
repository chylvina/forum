package com.donnfelker.android.bootstrap.ui;

import android.view.LayoutInflater;

import com.donnfelker.android.bootstrap.R;
import com.donnfelker.android.bootstrap.core.News;
import com.donnfelker.android.bootstrap.core.TopicInfo;
import com.donnfelker.android.bootstrap.ui.AlternatingColorListAdapter;

import java.util.List;

public class Top10Adapter extends AlternatingColorListAdapter<TopicInfo> {
    /**
     * @param inflater
     * @param items
     * @param selectable
     */
    public Top10Adapter(LayoutInflater inflater, List<TopicInfo> items,
                           boolean selectable) {
        super(R.layout.news_list_item, inflater, items, selectable);
    }

    /**
     * @param inflater
     * @param items
     */
    public Top10Adapter(LayoutInflater inflater, List<TopicInfo> items) {
        super(R.layout.news_list_item, inflater, items);
    }

    @Override
    protected int[] getChildViewIds() {
        return new int[] { R.id.tv_title, R.id.tv_date };
    }

    @Override
    protected void update(int position, TopicInfo item) {
        super.update(position, item);

        //setText(0, item.getCategory());
        setText(1, item.getTitle());
        //setNumber(R.id.tv_date, item.getCreatedAt());
    }
}
