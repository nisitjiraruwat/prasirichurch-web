import dayjs from 'dayjs'

import { Icon } from '#components'

import MainPosts from '~/components/home/MainPosts'
import VideoPosts from '~/components/home/VideoPosts'

export default defineComponent(() => {
  return () => (
    <div>
      <div>
        <div class='relative h-[95vh] w-full'>
          <img
            src='/images/posts/1.jpeg'
            class='absolute top-0 -z-20 h-full w-full object-cover'
          />
          <div class='absolute top-0 -z-10 h-full w-full rounded-lg bg-black/40'/>
          <div class='absolute top-1/2 h-1/3 w-1/2 -translate-y-1/2 px-4'>
            <div class='flex items-center space-x-4'>
              <div class='inline-block rounded bg-red-500 px-4 text-sm font-bold leading-8 text-white'>Technology</div>
              <div class='flex items-center space-x-1 text-neutral-100'>
                <Icon
                  class='text-[24px]'
                  name='ic:baseline-calendar-month'
                />
                <div class='text-sm'>{dayjs().format('MMMM DD, YYYY')}</div>
              </div>
            </div>
            <div class='mt-4 line-clamp-2 text-[42px] font-bold text-white'>โครงการขายออนไลน์</div>
          </div>
        </div>
        <div>
          <div class='relative float-right -mt-40 mr-20 h-40 w-[850px] rounded-t-lg bg-white p-5'>
            <div class='flex'>
              <div class='flex w-[380px]'>
                <img
                  src='/images/posts/1.jpeg'
                  class='h-[120px] w-[120px] rounded-md object-cover'
                />
                <div class='ml-5'>
                  <div class='inline-flex items-center space-x-2 text-neutral-500'>
                    <Icon name='ic:baseline-calendar-month' />
                    <div class='text-sm'>{dayjs().format('MMMM DD, YYYY')}</div>
                  </div>
                  <div class='text-xl font-bold'>โครงการขายออนไลน์</div>
                </div>
              </div>
              <div class='relative flex w-[470px] pl-[90px]'>
                <div class='absolute left-11 top-1/2 h-20 w-0.5 -translate-y-1/2 bg-neutral-200' />
                <img
                  src='/images/posts/2.jpg'
                  class='h-[120px] w-[120px] rounded-md object-cover'
                />
                <div class='ml-5'>
                  <div class='inline-flex items-center space-x-2 text-neutral-500'>
                    <Icon name='ic:baseline-calendar-month' />
                    <div class='text-sm'>{dayjs().format('MMMM DD, YYYY')}</div>
                  </div>
                  <div class='line-clamp-2 text-xl font-bold'>โครงการเงินตลันต์</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainPosts />
      <VideoPosts />
    </div>
  )
}, {
  name: 'Home'
})
