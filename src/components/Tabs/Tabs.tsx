import { useState } from 'react';

import * as Tabs from '@radix-ui/react-tabs';
import cx from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { PenIcon, EyeIcon } from '../icons';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';

export const MainTabs = () => {
  const [active, setisActive] = useState('tab1');
  return (
    <div>
      <Tabs.Root
        defaultValue="tab1"
        orientation="vertical"
        className="flex flex-col items-center space-y-3"
      >
        <Tabs.List
          aria-label="tabs example"
          className="bg-gray-400/30 rounded-full flex justify-between p-1 w-[100px]"
        >
          <Tabs.Trigger
            asChild
            value="tab1"
            className={cx(
              'rounded-full relative w-10 h-10  flex justify-center items-center'
            )}
            onClick={() => setisActive('tab1')}
          >
            <motion.button>
              {active === 'tab1' && (
                <motion.div
                  className="bg-white absolute inset-0 rounded-full"
                  layoutId="circle"
                />
              )}
              <PenIcon
                className={cx(
                  'stroke-gray-600 transition-colors z-10 w-7 h-7',
                  {
                    'stroke-gray-800': active === 'tab1',
                  }
                )}
              />
            </motion.button>
          </Tabs.Trigger>
          <Tabs.Trigger
            asChild
            value="tab2"
            className={cx(
              'rounded-full relative w-10 h-10 flex justify-center items-center'
            )}
            onClick={() => setisActive('tab2')}
          >
            <motion.button>
              {active === 'tab2' && (
                <motion.div
                  className="bg-white absolute inset-0 rounded-full"
                  layoutId="circle"
                />
              )}
              <EyeIcon
                className={cx(
                  'stroke-gray-600 transition-colors z-10 w-7 h-7',
                  {
                    'stroke-gray-800': active === 'tab2',
                  }
                )}
              />
            </motion.button>
          </Tabs.Trigger>
        </Tabs.List>

        <AnimatePresence exitBeforeEnter={true}>
          <Tabs.Content
            asChild
            value="tab1"
            className="w-full flex justify-center outline-none"
          >
            {active === 'tab1' && (
              <motion.div
                key="tab1"
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                transition={{ type: 'spring' }}
              >
                <Tab1 />
              </motion.div>
            )}
          </Tabs.Content>

          <Tabs.Content
            asChild
            value="tab2"
            className="w-full flex justify-center outline-none"
          >
            {active === 'tab2' && (
              <motion.div
                key="tab2"
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: -200 }}
                transition={{ type: 'spring' }}
              >
                <Tab2 />
              </motion.div>
            )}
          </Tabs.Content>
        </AnimatePresence>
      </Tabs.Root>
    </div>
  );
};
