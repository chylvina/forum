package com.donnfelker.android.bootstrap.ui;

import android.view.LayoutInflater;

import com.donnfelker.android.bootstrap.R;
import com.donnfelker.android.bootstrap.core.TopicInfo;

import java.util.List;

public class HotSpotAdapter extends AlternatingColorListAdapter<TopicInfo> {
    /**
     * @param inflater
     * @param items
     * @param selectable
     */
    public HotSpotAdapter(LayoutInflater inflater, List<TopicInfo> items,
                        boolean selectable) {
        super(R.layout.topic_list_item, inflater, items, selectable);
    }

    /**
     * @param inflater
     * @param items
     */
    public HotSpotAdapter(LayoutInflater inflater, List<TopicInfo> items) {
        super(R.layout.topic_list_item, inflater, items);
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
