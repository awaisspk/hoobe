import { Header } from '@/components/header';
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
      <Header />
      <div className="mt-10 md:-mt-10">
        <MainTabs />
      </div>
    </Main>
  );
};

export default Index;
