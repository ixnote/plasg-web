import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  // Misc
  const [name, setName] = useState<String>("");
  const [opened, { open, close }] = useDisclosure(false);

  // Tags
  const [typeTags, setTypeTags] = useState([]);
  const [newsTags, setNewsTags] = useState([]);
  const [typeTagId, setTypeTagId] = useState("");
  const [tagTopicName, setTagTopicName] = useState("");
  const [topicTags, setTopicTags] = useState();
  const [oneTopicTag, setOneTopicTag] = useState();
  const [topicTagId, setTopicTagId] = useState("");
  const [topicSubTagId, setTopicSubTagId] = useState("");

  // Resources
  const [resources, setResources] = useState([]);
  const [homeResources, setHomeResources] = useState([]);
  const [loadingResource, setLoadingResource] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // console.log("🚀 ~ GeneralProvider ~ totalPages:", totalPages);

  // Static
  const [legislatives, setLegislatives] = useState([]);

  // MDA
  const [mdaSlug, setMdaSlug] = useState("");
  const [oneMda, setOneMda] = useState() as any;
  const [mdaNews, setMdaNews] = useState() as any;

  //*******/
  //************/
  // TAGS
  //************/
  //*******/
  const allTypeTags = async () => {
    try {
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tag/types`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      setLoadingResource(false);
      // console.log("🚀 ~ allTypeTags ~ response:", response.data.data);
      return setTypeTags(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allResources ~ error:", error.message);
    }
  };

  const getTopicTags = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tag/topics`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // Set a timeout of 10 seconds
        }
      );
      // console.log("🚀 ~ getTopicTags ~ response:", response.data.data);
      return setTopicTags(response.data.data);
    } catch (error: any) {
      console.log("🚀 ~ allResources ~ error:", error.message);
      // throw new Error(error.message);
    }
  };

  const allNewsTags = async () => {
    try {
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tag/news`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ allNewsTags ~ response:", response);
      setLoadingResource(false);
      return setNewsTags(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allNewsTags ~ error:", error);
    }
  };

  //*******/
  //************/
  // RESOURCES
  //************/
  //*******/
  // const allResources = async () => {
  //   try {
  //     // console.log("🚀 ~ allResources ~ topicTagId:", topicTagId);
  //     // console.log("🚀 ~ GeneralProvider ~ typeTagId:", typeTagId);
  //     // console.log("🚀 ~ GeneralProvider ~ resources:", resources);

  //     setLoadingResource(true);
  //     const response = await axios.get(
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all?page=1&pageSize=10&${
  //         topicTagId &&
  //         `main_topic_tag=${topicTagId}&${
  //           topicSubTagId && `all_topic_tag=${topicSubTagId}`
  //         }&${typeTagId && `main_type_tag=${typeTagId}`}`
  //       }`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         timeout: 10000,
  //       }
  //     );
  //     // console.log("🚀 ~ allResources ~ response:", response.data.data);
  //     setLoadingResource(false);
  //     return setResources(response.data.data);
  //   } catch (error: any) {
  //     setLoadingResource(false);
  //     console.log("🚀 ~ allResources ~ error:", error.message);
  //   }
  // };

  const allResources = async (page = 1) => {
    try {
      setLoadingResource(true);
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/resource/all?page=${page}&pageSize=10${
          topicTagId ? `&main_topic_tag=${topicTagId}` : ""
        }${topicSubTagId ? `&all_topic_tag=${topicSubTagId}` : ""}${
          typeTagId ? `&main_type_tag=${typeTagId}` : ""
        }${oneMda?.id ? `&mdaId=${oneMda?.id}` : ""}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ allResources ~ response:", response.data.data);
      setLoadingResource(false);
      setResources(response.data.data);
      setTotalPages(response.data.data.pagination.totalPages); // Assuming the API returns total pages
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allResources ~ error:", error.message);
    }
  };

  const getHomeResources = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resource/home-page`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ getHomeResources ~ response:", response.data.data);
      // const firstFourResources = response.data.data.resources.slice(0, 4);
      // return setHomeResources(firstFourResources);
      return setHomeResources(response.data.data.slice(0, 4));
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ getHomeResources ~ error:", error.message);
    }
  };

  const getResourceByType = async () => {
    // Resource, Document, Service
    try {
      // console.log("🚀 ~ GeneralProvider ~ typeTagId Fetch: ", typeTagId);
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all?page=1&pageSize=10&main_type_tag=${typeTagId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ getResourceByType ~ response:", response.data.data);
      setLoadingResource(false);
      return setResources(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ getResourceByType ~ error:", error.message);
    }
  };

  const getResourceByTagTopicName = async (name: any) => {
    console.log("🚀 ~ getResourceByTagTopicName ~ name:", name);
    // Governance, Business, Health, Welfare, Tourism
    try {
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resource/category/${name}?page=1&pageSize=1`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log(
      //   "🚀 ~ getResourceByTagTopicName ~ response:",
      //   response.data.data
      // );
      setLoadingResource(false);
      return setResources(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ getResourceByTagTopicName ~ error:", error.message);
    }
  };

  //*******/
  //************/
  // MDAs
  //************/
  //*******/
  const getMdaNews = async (page = 1) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/news/articles/${oneMda?.id}/?page=${page}&pageSize=10`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ getMdaNews ~ response:", response.data.data);
      // console.log("🚀 ~ getHomeResources ~ response:", response.data.data);
      // const firstFourResources = response.data.data.resources.slice(0, 4);
      // return setHomeResources(firstFourResources);
      setMdaNews(response.data.data.news);
      setTotalPages(response.data.data.pagination.totalPages);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ getHomeResources ~ error:", error.message);
    }
  };

  //*******/
  //************/
  // STATIC
  //************/
  //*******/
  const allLegislatives = async () => {
    try {
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/statics/legislatives?page=1&pageSize=10`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ allLegislatives ~ response:", response.data.data);
      // setLoadingResource(false);
      return setLegislatives(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allLegislatives ~ error:", error.message);
    }
  };

  useEffect(() => {
    allResources();
  }, [typeTagId, topicTagId, oneMda]);

  useEffect(() => {
    if (oneMda) getMdaNews();
  }, [oneMda]);

  useEffect(() => {
    if (tagTopicName) getResourceByTagTopicName(tagTopicName);
  }, [tagTopicName]);

  //*******/
  //************/
  // fetch everything on startup
  //************/
  //*******/

  useEffect(() => {
    console.log("__3d1k4N.init");
    allNewsTags();
    allTypeTags();
    getTopicTags();
    getHomeResources();
    allLegislatives();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        // Misc
        name,
        loadingResource,
        setName,
        setLoadingResource,

        // Tags
        newsTags,
        typeTags,
        topicTags,
        typeTagId,
        topicTagId,
        oneTopicTag,
        tagTopicName,
        topicSubTagId,
        allTypeTags,
        setNewsTags,
        setTypeTags,
        getTopicTags,
        setTopicTags,
        setTypeTagId,
        setTopicTagId,
        setOneTopicTag,
        setTagTopicName,
        setTopicSubTagId,

        // Resources
        resources,
        activePage,
        totalPages,
        homeResources,
        allResources,
        setResources,
        setActivePage,
        setTotalPages,
        getResourceByType,
        getResourceByTagTopicName,

        // Static
        legislatives,
        allLegislatives,
        setLegislatives,

        // MDA
        oneMda,
        mdaNews,
        mdaSlug,
        setOneMda,
        getMdaNews,
        setMdaNews,
        setMdaSlug,
        opened,
        open,
        close,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  return context;
};

export default GeneralProvider;
