package studio.bb.rnlib;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.util.Log;

public class IDWarehouse {

//    private static final String PREF_ID = "ID";
    private static final String DEFAULT = "DEFAULT";
    private static final String SPECIFIC = "SPECIFIC";
    private static final String APPSTATE = "APPSTATE";
    private static final String DEFAULT_CONTENT = "-1";

    private static final String TAG = "IDWarehouse";
//    private static String sID = null;

    private static final Object sIDLock = new Object();


    public static void setDefaultContent(Context c, String s) {
        synchronized (sIDLock) {
            Log.i(TAG, "setDefaultContent: " + s);
            SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(c);
            prefs.edit().putString(DEFAULT, s).commit();
        }
    }

    public static void setSpecificContent(Context c, String s) {
        synchronized (sIDLock) {
            Log.i(TAG, "setSpecificContent: " + s);
            SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(c);
            prefs.edit().putString(SPECIFIC, s).commit();
        }
    }

    public static void setAppState(Context c, String s) {
        synchronized (sIDLock) {
            Log.i(TAG, "setAppState: " + s);
            SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(c);
            prefs.edit().putString(APPSTATE, s).commit();
        }
    }



    public static String getContent(Context c) {
        synchronized (sIDLock) {
            SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(c);
            String appState =  prefs.getString(APPSTATE, DEFAULT_CONTENT);
            String content = "";
            Log.i(TAG, "appState: " + appState);
            if(appState.equals("active")){
                content = prefs.getString(SPECIFIC, DEFAULT_CONTENT);
            }else {
                content = prefs.getString(DEFAULT, DEFAULT_CONTENT);
            }
            Log.i(TAG, "content: " + content);

            return content;
        }
    }



}
