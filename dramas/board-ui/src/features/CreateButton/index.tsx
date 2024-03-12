import { BoardApi } from '@repo/board-core/apis';
import { Button, ButtonProps } from '@repo/shared/ui';

interface CreateButtonProps extends ButtonProps {
  additionalProps: boolean;
}

export const CreateButton = ({
  additionalProps,
  ...props
}: CreateButtonProps) => {
  console.log(additionalProps);

  // hooks
  const registerBoard = BoardApi.mutation.registerBoard.mutationFn;

  // handlers
  const handleClick = () => {
    registerBoard({ boardCdo: { name: '' } });
  };

  return <Button {...props} onClick={handleClick} />;
};
