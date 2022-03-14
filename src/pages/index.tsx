import { Main } from '@/components/Main';
import { MainTabs } from '@/components/Tabs';
import { Meta } from '@/layout/Meta';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="My Page"
          description="hoo.be is an invite-only platform for today's leading creators."
        />
      }
    >
      <div className="mt-5 w-full px-1">
        <MainTabs />
      </div>
    </Main>
  );
};

export default Index;
