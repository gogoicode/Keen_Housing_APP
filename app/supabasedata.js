import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://wvbovqfvxtkuavxtdejh.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2Ym92cWZ2eHRrdWF2eHRkZWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxMTMyMjksImV4cCI6MjAzNTY4OTIyOX0.1hC2pDLOb4yf0EF1ak8JNUr6pRoS_ztqxDGm4CtX-kM";

//using AI
const updateLightState = async (state) => {
  try {
    const { data, error } = await supabase
      .from('Lights')
      .update({ is_on: state })
      .eq('id', 1);

    if (error) {
      console.error('Error updating light state:', error);
    } else {
      console.log('Light state updated:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
//

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})