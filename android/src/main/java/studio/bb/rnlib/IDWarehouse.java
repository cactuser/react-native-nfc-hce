package studio.bb.rnlib;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.util.Log;

public class IDWarehouse {

    private static final String PREF_ID = "ID";
    private static final String DEFAULT_ID = "default";
    private static final String TAG = "IDWarehouse";
    private static String sID = null;
    private static final Object sIDLock = new Object();

    public static void SetID(Context c, String s) {
        synchronized (sIDLock) {
            Log.i(TAG, "Setting ID: " + s);
            SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(c);
            prefs.edit().putString(PREF_ID, s).commit();
            sID = s;
        }
    }

    public static String GetID(Context c) {
        synchronized (sIDLock) {
            if (sID == null) {
                SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(c);
                String ID = prefs.getString(PREF_ID, DEFAULT_ID);
                sID = ID;
            }
            return sID;
        }
    }
}
