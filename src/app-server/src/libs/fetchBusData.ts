import Bus from '../interface/Bus';
import Constants from "expo-constants";

export const fetchBusData = async () => {
  // const hostIp = Constants?.expoConfig?.hostUri ? Constants.expoConfig.hostUri.split(`:`).shift() : '';
  const url = `http://${process.env.EXPO_PUBLIC_IP}:8081/api/bus`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const busList: Bus[] = data.map((bus: any) => {
      return {
        bus_num: bus.bus_num,
        start_time: bus.start_time
      }
    });
    return busList;
  } catch (error) {
    console.log(error);
  }
  return [];
}