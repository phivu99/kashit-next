export type RegularPage = {
    notFound: boolean;
    frontmatter: {
      title: string;
      image?: string;
      description?: string;
      meta_title?: string;
      layout?: string;
      draft?: boolean;
    };
    content: string;
  };
  
  export type Post = {
    notFound?: boolean;
    frontmatter: {
      title: string;
      meta_title?: string;
      description?: string;
      image?: string;
      categories: string[];
      author: string;
      tags: string[];
      date?: string;
      draft?: boolean;
    };
    slug?: string;
    content?: string;
  };
  
  export type Author = {
    notFound?: boolean;
    frontmatter: {
      title: string;
      image?: string;
      description?: string;
      meta_title?: string;
      socials: {
        facebook: string;
        twitter: string;
        instagram: string;
      };
    };
    content?: string;
    slug?: string;
  };
  
  export type Feature = {
    button: button;
    image: string;
    bulletpoints: string[];
    content: string;
    title: string;
  };
  
  // export type  SliderOne = {
  //   name: string;
  //   designation: string;
  //   avatar: string;
  //   content: string;
  // };
  
  export type Call_to_action = {
    enable?: boolean;
    title: string;
    description: string;
    image: string;
    button: Button;
  };
  
  export type Button = {
    enable: boolean;
    label: string;
    link: string;
  };
  