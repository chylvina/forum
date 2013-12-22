package com.donnfelker.android.bootstrap.core;

import java.io.Serializable;

public class TopicInfo implements Serializable {

    private static final long serialVersionUID = -6641292855569752036L;

    private String category;
    private String categoryHref;
    private String title;
    private String href;
    private String num;

    public TopicInfo(String category, String categoryHref, String title, String href, String num) {
        this.category = category;
        this.categoryHref = categoryHref;
        this.title = title;
        this.href = href;
        this.num = num;
    }

    public String getCategory() {
        return category;
    }

    public String getCategoryHref() {
        return categoryHref;
    }

    public String getTitle() {
        return title;
    }

    public String getHref() {
        return href;
    }

    public String getNum() {
        return num;
    }

}
