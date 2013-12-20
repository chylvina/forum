package com.donnfelker.android.bootstrap.core;

public class TopicInfo {

    private String category;
    private String categoryHref;
    private String title;
    private String href;
    private Short num;

    public TopicInfo(String category, String categoryHref, String title, String href, Short num) {
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

    public Short getNum() {
        return num;
    }

    private Location location;
    private String name;
    private String objectId;

}
