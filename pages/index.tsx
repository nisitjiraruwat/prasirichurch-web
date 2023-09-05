import dayjs from 'dayjs'

import { Icon } from '#components'

export default defineComponent(() => {
  return () => (
    <div>
      <div>
        <div>
          <img
            src='/images/hero-bg-2.jpg'
            class='h-[95vh] w-full object-cover'
          />
        </div>
        <div>
          <div class='relative float-right -mt-40 mr-20 h-40 w-[850px] rounded-t-lg bg-white p-5'>
            <div class='flex'>
              <div class='flex w-[380px]'>
                <img
                  src='/images/hero-bg-2.jpg'
                  class='h-[120px] w-[120px] rounded-md object-cover'
                />
                <div class='ml-5'>
                  <div class='inline-flex items-center space-x-2 text-neutral-500'>
                    <Icon name='ic:baseline-calendar-month' />
                    <div class='text-sm'>{dayjs().format('MMMM DD, YYYY')}</div>
                  </div>
                  <div class='text-xl font-bold'>Sparks of inspiration to Blasters Have Lost</div>
                </div>
              </div>
              <div class='relative flex w-[470px] pl-[90px]'>
                <div class='absolute left-11 top-1/2 h-20 w-0.5 -translate-y-1/2 bg-neutral-200' />
                <img
                  src='/images/hero-bg-2.jpg'
                  class='h-[120px] w-[120px] rounded-md object-cover'
                />
                <div class='ml-5'>
                  <div class='inline-flex items-center space-x-2 text-neutral-500'>
                    <Icon name='ic:baseline-calendar-month' />
                    <div class='text-sm'>{dayjs().format('MMMM DD, YYYY')}</div>
                  </div>
                  <div class='line-clamp-2 text-xl font-bold'>Sparks of inspiration to Blasters Have Lost2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>F</div>
    </div>
  )
}, {
  name: 'Home'
})
