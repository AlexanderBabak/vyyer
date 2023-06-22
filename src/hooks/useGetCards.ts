import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import { getPersons, getScans } from "../api/services";
import { TABS } from "../constants/userData";
import { showNotification } from "../helpers/showNotification";
import { USERS_IMAGES } from "../mockData";
import { Cards, IPersons, IScans } from "../types/data";

const useGetCards = () => {
  const [scans, setScans] = useState<Array<IScans>>([]);
  const [persons, setPersons] = useState<Array<IPersons>>([]);
  const [cards, setCards] = useState<Array<Cards>>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(TABS.all);

  const tabsFilter = Object.values(TABS);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const accessToken = await AsyncStorage.getItem("token");
        if (!accessToken) {
          return;
        }
        const scansData = await getScans(accessToken);
        setScans(scansData);

        const identityIDArray = scansData.map(
          (item: IScans) => item.IdentityID,
        );
        const personsData = await getPersons(accessToken, identityIDArray);
        setPersons(personsData);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        showNotification(`Authorisation error: ${error?.message}`);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    filterScans(activeTab);
  }, [scans, persons, activeTab]);

  const filterScans = (activeTabName: string) => {
    const filteredCards: any = scans
      .map((scan, index) => {
        const user = persons.find(item => item.ID === scan.IdentityID);

        if (user) {
          return {
            verdictName: scan.VerdictName,
            name: user.FullName,
            time: scan.CreatedAt,
            id: scan.ID,
            image: USERS_IMAGES[index],
          };
        }
      })
      .filter(Boolean)
      .filter(filteredCard =>
        activeTabName !== TABS.all
          ? filteredCard?.verdictName === activeTabName
          : filteredCard,
      );

    setCards(filteredCards);
  };

  return { cards, loading, tabsFilter, activeTab, setActiveTab };
};

export default useGetCards;
