package com.donnfelker.android.bootstrap.ui;

import static com.donnfelker.android.bootstrap.core.Constants.Extra.NEWS_ITEM;
import static com.donnfelker.android.bootstrap.core.Constants.Extra.TOPIC_INFO;

import android.os.Bundle;
import android.widget.TextView;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.donnfelker.android.bootstrap.R;
import com.donnfelker.android.bootstrap.core.News;

import butterknife.InjectView;
import com.donnfelker.android.bootstrap.core.TopicInfo;

public class TopicActivity extends BootstrapActivity {

    protected TopicInfo topicInfo;

    @InjectView(R.id.tv_title) protected TextView title;
    @InjectView(R.id.tv_content) protected TextView content;

    @InjectView(R.id.webview) protected WebView mWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.topic);

        if(getIntent() != null && getIntent().getExtras() != null) {
            topicInfo = (TopicInfo) getIntent().getExtras().getSerializable(TOPIC_INFO);
        }

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);

        setTitle("Title Test");

        // Find WebView and get it ready to display pages
        mWebView = (WebView) findViewById(R.id.webview);
        mWebView.getSettings().setJavaScriptEnabled(true);
        mWebView.setWebViewClient(new CustomWebViewClient());

        // Finally make the WebView load something...
        mWebView.loadUrl(topicInfo.getHref());

    }

    private class CustomWebViewClient extends WebViewClient {

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            // Return false so the WebView loads the url
            return false;
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);

        }
    }

}
