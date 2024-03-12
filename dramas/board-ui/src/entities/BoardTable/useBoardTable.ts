import { useEffect, useState } from 'react';
import { atom, useAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { QueryResponse } from '@repo/accent';
import { BoardQueryApi } from '@repo/board-core/apis';
import { Board } from '@repo/board-core/models';

const contextAtom = atom({
  name: '',
  requesterKey: {
    type: '',
  },
  stageId: '',
  pavilionId: '',
  id: '',
  entityVersion: 0,
  registeredBy: '',
  registeredOn: '',
  modifiedBy: '',
  modifiedOn: 0,
});

export function useBoardTable() {
  // atom
  const [context, setContext] = useAtom(contextAtom);

  // state
  const [queryParams, setQueryParmas] = useState({ ...context });

  // query
  const findList = BoardQueryApi.query.executeBoardsDynamic({
    ...queryParams,
  });
  const list = useQuery<QueryResponse<Board[]>>({
    ...findList,
  });

  // useEffect
  useEffect(() => {
    setQueryParmas({ ...queryParams, ...context });
  }, [context]);
}
