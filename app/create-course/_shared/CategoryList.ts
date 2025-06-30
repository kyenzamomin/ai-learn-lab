type CategoryListType = {
  id: number;
  name: string;
  icon: string;
  prompt: string;
};

export const categoryList: CategoryListType[] = [
  {
    id: 1,
    name: "Programming",
    icon: "/coding.png",
    prompt: "",
  },
  {
    id: 2,
    name: "Health",
    icon: "/health.png",
    prompt: "",
  },
  {
    id: 3,
    name: "Creative",
    icon: "/creative.png",
    prompt: "",
  },
  {
    id: 4,
    name: "Personal Development",
    icon: "/personal-development.png",
    prompt: "",
  },
  {
    id: 5,
    name: "Business and Finance",
    icon: "/business-finance.png",
    prompt: "",
  },
  {
    id: 6,
    name: "Renewable Tech",
    icon: "/renewable-tech.png",
    prompt: "",
  },
];

export default categoryList;