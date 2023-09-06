import dayjs from 'dayjs'

import { Icon } from '#components'

export default defineComponent(() => {
  return () => (
    <div class='w-full bg-gray-100'>
      <div class='mx-auto w-full px-3 pb-15 pt-14 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
        <div class='flex w-full space-x-2'>
          <div class='flex w-7/12 items-center space-x-5'>
            <h3 class='text-3xl font-bold'>Video Posts</h3>
            <div class='h-1 flex-1 bg-red-600' />
          </div>
          <div class='flex w-5/12 items-center justify-end'>
            <ul class='flex'>
              <li>
                <button class='px-4 text-sm font-bold text-neutral'>All</button>
              </li>
              <li>
                <button class='px-4 text-sm font-bold text-neutral'>Travel</button>
              </li>
              <li>
                <button class='px-4 text-sm font-bold text-neutral'>Fashion</button>
              </li>
              <li>
                <button class='px-4 text-sm font-bold text-neutral'>Health</button>
              </li>
              <li>
                <button class='px-4 text-sm font-bold text-neutral'>Nature</button>
              </li>
            </ul>
          </div>
        </div>
        <div class='mt-12 grid w-full grid-cols-4 gap-7.5'>
          <div class='col-span-1 space-y-7.5'>
            <div class='w-full'>
              <div class='relative'>
                <img
                  src='/images/hero-bg-2.jpg'
                  class='aspect-video w-full rounded-md object-cover'
                />
                <div class='absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded bg-white'>
                  <Icon
                    class='text-[32px] text-red-500'
                    name='ic:round-play-arrow'
                  />
                </div>
              </div>
              <div class='mt-5'>
                <div class='flex space-x-2'>
                  <div class='rounded bg-red-100 px-4 text-sm font-bold leading-6 text-red-500 hover:bg-red-500 hover:text-white'>Technology</div>
                  <div class='flex items-center space-x-1 text-neutral-500'>
                    <Icon
                      class='text-[14px]'
                      name='ic:baseline-calendar-month'
                    />
                    <div class='text-xs'>{dayjs().format('MMMM DD, YYYY')}</div>
                  </div>
                </div>
                <div class='mt-4 line-clamp-2 text-lg font-bold'>Sparks of inspiration to Blasters Have Lost2</div>
              </div>
            </div>
            <div class='w-full'>
              <div class='relative'>
                <img
                  src='/images/hero-bg-2.jpg'
                  class='aspect-video w-full rounded-md object-cover'
                />
                <div class='absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded bg-white'>
                  <Icon
                    class='text-[32px] text-red-500'
                    name='ic:round-play-arrow'
                  />
                </div>
              </div>
              <div class='mt-5'>
                <div class='inline-block rounded bg-red-100 px-4 text-sm font-bold leading-6 text-red-500 hover:bg-red-500 hover:text-white'>Technology</div>
                <div class='mt-1.5 flex items-center space-x-1 text-neutral-500'>
                  <Icon
                    class='text-[14px]'
                    name='ic:baseline-calendar-month'
                  />
                  <div class='text-xs'>{dayjs().format('MMMM DD, YYYY')}</div>
                </div>
                <div class='mt-4 line-clamp-2 text-lg font-bold'>Sparks of inspiration to Blasters Have Lost2</div>
              </div>
            </div>
          </div>
          <div class='col-span-2'>
            <div class='w-full'>
              <div class='relative'>
                <img
                  src='/images/hero-bg-2.jpg'
                  class='aspect-[4/3] w-full rounded-md object-cover'
                />
                <div class='absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded bg-white'>
                  <Icon
                    class='text-[32px] text-red-500'
                    name='ic:round-play-arrow'
                  />
                </div>
              </div>
              <div class='mt-5'>
                <div class='inline-block rounded bg-red-100 px-4 text-sm font-bold leading-6 text-red-500 hover:bg-red-500 hover:text-white'>Technology</div>
                <div class='mt-1.5 flex items-center space-x-1 text-neutral-500'>
                  <Icon
                    class='text-[14px]'
                    name='ic:baseline-calendar-month'
                  />
                  <div class='text-xs'>{dayjs().format('MMMM DD, YYYY')}</div>
                </div>
                <div class='mt-4 line-clamp-2 text-lg font-bold'>Sparks of inspiration to Blasters Have Lost2</div>
              </div>
            </div>
          </div>
          <div class='col-span-1 space-y-7.5'>
            <div class='w-full'>
              <div class='relative'>
                <img
                  src='/images/hero-bg-2.jpg'
                  class='aspect-video w-full rounded-md object-cover'
                />
                <div class='absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded bg-white'>
                  <Icon
                    class='text-[32px] text-red-500'
                    name='ic:round-play-arrow'
                  />
                </div>
              </div>
              <div class='mt-5'>
                <div class='inline-block rounded bg-red-100 px-4 text-sm font-bold leading-6 text-red-500 hover:bg-red-500 hover:text-white'>Technology</div>
                <div class='mt-1.5 flex items-center space-x-1 text-neutral-500'>
                  <Icon
                    class='text-[14px]'
                    name='ic:baseline-calendar-month'
                  />
                  <div class='text-xs'>{dayjs().format('MMMM DD, YYYY')}</div>
                </div>
                <div class='mt-4 line-clamp-2 text-lg font-bold'>Sparks of inspiration to Blasters Have Lost2</div>
              </div>
            </div>
            <div class='w-full'>
              <div class='relative'>
                <img
                  src='/images/hero-bg-2.jpg'
                  class='aspect-video w-full rounded-md object-cover'
                />
                <div class='absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded bg-white'>
                  <Icon
                    class='text-[32px] text-red-500'
                    name='ic:round-play-arrow'
                  />
                </div>
              </div>
              <div class='mt-5'>
                <div class='inline-block rounded bg-red-100 px-4 text-sm font-bold leading-6 text-red-500 hover:bg-red-500 hover:text-white'>Technology</div>
                <div class='mt-1.5 flex items-center space-x-1 text-neutral-500'>
                  <Icon
                    class='text-[14px]'
                    name='ic:baseline-calendar-month'
                  />
                  <div class='text-xs'>{dayjs().format('MMMM DD, YYYY')}</div>
                </div>
                <div class='mt-4 line-clamp-2 text-lg font-bold'>Sparks of inspiration to Blasters Have Lost2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}, {
  name: 'VideoPosts'
})
