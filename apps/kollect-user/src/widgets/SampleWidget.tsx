import { Button } from '@repo/shared/ui';
import { CreateButton } from '@repo/board-ui/features';

export const SampleWidget = () => {
  return (
    <div>
      <Button>Shared Button</Button>
      <CreateButton additionalProps>Feature Button</CreateButton>
    </div>
  );
};
