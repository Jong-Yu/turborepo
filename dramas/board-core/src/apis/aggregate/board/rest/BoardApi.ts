import { FirstParameter, NameValueList, CommandResponse } from '@repo/accent';
import axios from 'axios';
import { BoardCdo, Board, PostCdo, Post } from '~/models';
import { BoardCommand, PostCommand } from '../command';

const url = (path: string) => `/api/board/aggregate/board${path}`;

const registerBoard = (variables: { boardCdo: BoardCdo | BoardCdo[] }) => {
  const command = <BoardCommand>{};
  if (Array.isArray(variables.boardCdo)) {
    Object.assign(command, {
      boardCdos: variables.boardCdo,
      multiCdo: true,
    });
  } else {
    Object.assign(command, {
      boardCdo: variables.boardCdo,
      multiCdo: false,
    });
  }
  return axios.post<CommandResponse>(url('/board/register/command'), command);
};

const modifyBoard = <T = Board>(variables: {
  boardId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <BoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/board/modify/command'), command);
};

const removeBoard = (variables: { boardId: string }) => {
  const command = <BoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/board/remove/command'), command);
};

const registerPost = (variables: { postCdo: PostCdo | PostCdo[] }) => {
  const command = <PostCommand>{};
  if (Array.isArray(variables.postCdo)) {
    Object.assign(command, {
      postCdos: variables.postCdo,
      multiCdo: true,
    });
  } else {
    Object.assign(command, {
      postCdo: variables.postCdo,
      multiCdo: false,
    });
  }
  return axios.post<CommandResponse>(url('/post/register/command'), command);
};

const modifyPost = <T = Post>(variables: {
  postId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <PostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/post/modify/command'), command);
};

const removePost = (variables: { postId: string }) => {
  const command = <PostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/post/remove/command'), command);
};

export default {
  registerBoard,
  modifyBoard,
  removeBoard,
  registerPost,
  modifyPost,
  removePost,

  mutation: {
    registerBoard: {
      mutationFn: async (variables: FirstParameter<typeof registerBoard>) =>
        (await registerBoard(variables))?.data,
    },
    modifyBoard: {
      mutationFn: async (variables: FirstParameter<typeof modifyBoard>) =>
        (await modifyBoard(variables))?.data,
    },
    removeBoard: {
      mutationFn: async (variables: FirstParameter<typeof removeBoard>) =>
        (await removeBoard(variables))?.data,
    },
    registerPost: {
      mutationFn: async (variables: FirstParameter<typeof registerPost>) =>
        (await registerPost(variables))?.data,
    },
    modifyPost: {
      mutationFn: async (variables: FirstParameter<typeof modifyPost>) =>
        (await modifyPost(variables))?.data,
    },
    removePost: {
      mutationFn: async (variables: FirstParameter<typeof removePost>) =>
        (await removePost(variables))?.data,
    },
  },
};
