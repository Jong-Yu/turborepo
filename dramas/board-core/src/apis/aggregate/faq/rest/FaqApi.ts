import { FirstParameter, NameValueList, CommandResponse } from '@repo/accent';
import axios from 'axios';
import { CategoryCdo, Category, FaqCdo, Faq } from '~/models';
import { CategoryCommand, FaqCommand } from '../command';

const url = (path: string) => `/api/board/aggregate/faq${path}`;

const registerCategory = (variables: {
  categoryCdo: CategoryCdo | CategoryCdo[];
}) => {
  const command = <CategoryCommand>{};
  if (Array.isArray(variables.categoryCdo)) {
    Object.assign(command, {
      categoryCdos: variables.categoryCdo,
      multiCdo: true,
    });
  } else {
    Object.assign(command, {
      categoryCdo: variables.categoryCdo,
      multiCdo: false,
    });
  }
  return axios.post<CommandResponse>(
    url('/category/register/command'),
    command,
  );
};

const modifyCategory = <T = Category>(variables: {
  categoryId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <CategoryCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/category/modify/command'), command);
};

const removeCategory = (variables: { categoryId: string }) => {
  const command = <CategoryCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/category/remove/command'), command);
};

const registerFaq = (variables: { faqCdo: FaqCdo | FaqCdo[] }) => {
  const command = <FaqCommand>{};
  if (Array.isArray(variables.faqCdo)) {
    Object.assign(command, {
      faqCdos: variables.faqCdo,
      multiCdo: true,
    });
  } else {
    Object.assign(command, {
      faqCdo: variables.faqCdo,
      multiCdo: false,
    });
  }
  return axios.post<CommandResponse>(url('/faq/register/command'), command);
};

const modifyFaq = <T = Faq>(variables: {
  faqId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <FaqCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/faq/modify/command'), command);
};

const removeFaq = (variables: { faqId: string }) => {
  const command = <FaqCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/faq/remove/command'), command);
};

export default {
  registerCategory,
  modifyCategory,
  removeCategory,
  registerFaq,
  modifyFaq,
  removeFaq,

  mutation: {
    registerCategory: {
      mutationFn: async (variables: FirstParameter<typeof registerCategory>) =>
        (await registerCategory(variables))?.data,
    },
    modifyCategory: {
      mutationFn: async (variables: FirstParameter<typeof modifyCategory>) =>
        (await modifyCategory(variables))?.data,
    },
    removeCategory: {
      mutationFn: async (variables: FirstParameter<typeof removeCategory>) =>
        (await removeCategory(variables))?.data,
    },
    registerFaq: {
      mutationFn: async (variables: FirstParameter<typeof registerFaq>) =>
        (await registerFaq(variables))?.data,
    },
    modifyFaq: {
      mutationFn: async (variables: FirstParameter<typeof modifyFaq>) =>
        (await modifyFaq(variables))?.data,
    },
    removeFaq: {
      mutationFn: async (variables: FirstParameter<typeof removeFaq>) =>
        (await removeFaq(variables))?.data,
    },
  },
};
