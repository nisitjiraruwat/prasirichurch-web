import dayjs from 'dayjs'

import { Icon } from '#components'

export default defineComponent(() => {
  return () => (
    <div class='mx-auto w-full px-3 pb-15 pt-14 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
      <div class='flex w-full'>
        <div class='w-9/12'>
          <div class='flex w-full space-x-2'>
            <div class='flex w-7/12 items-center space-x-5'>
              <h3 class='text-3xl font-bold'>Main Posts</h3>
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
          <div class='mt-12 flex w-full'>
            <div class='w-7/12 pr-3'>
              <div class='relative w-full'>
                <img
                  src='/images/posts/1.jpeg'
                  class='absolute top-0 -z-20 aspect-[4/3] w-full rounded-lg object-cover'
                />
                <div class='absolute top-0 -z-10 aspect-[4/3] w-full rounded-lg bg-black/40'/>
                <div class='flex aspect-[4/3] w-full items-end p-7.5 '>
                  <div class='h-25'>
                    <div class='flex items-center space-x-4'>
                      <div class='inline-block rounded bg-red-500 px-4 text-sm font-bold leading-8 text-white'>Technology</div>
                      <div class='flex items-center space-x-1 text-neutral-100'>
                        <Icon
                          class='text-[24px]'
                          name='ic:baseline-calendar-month'
                        />
                        <div>{dayjs().format('MMMM DD, YYYY')}</div>
                      </div>
                    </div>
                    <div class='mt-4 line-clamp-2 text-xl font-bold text-white'>โครงการขายออนไลน์</div>
                  </div>
                </div>
              </div>
            </div>
            <div class='flex w-5/12 px-4'>
              <ul class='divide-y divide-neutral-200'>
                <li class='py-7.5 first:pt-0'>
                  <div class='relative flex'>
                    <img
                      src='/images/posts/2.jpg'
                      class='aspect-[6/5] w-29 rounded-md object-cover'
                    />
                    <div class='ml-5'>
                      <div class='inline-block rounded bg-red-100 px-4 text-sm font-bold leading-6 text-red-500 hover:bg-red-500 hover:text-white'>Technology</div>
                      <div class='mt-1.5 flex items-center space-x-1 text-neutral-500'>
                        <Icon
                          class='text-[14px]'
                          name='ic:baseline-calendar-month'
                        />
                        <div class='text-xs'>{dayjs().format('MMMM DD, YYYY')}</div>
                      </div>
                      <div class='mt-4 line-clamp-2 text-lg font-bold'>โครงการเงินตลันต์</div>
                    </div>
                  </div>
                </li>
                <li class='py-7.5 first:pt-0'>
                  <div class='relative flex'>
                    <img
                      src='/images/hero-bg-2.jpg'
                      class='aspect-[6/5] w-29 rounded-md object-cover'
                    />
                    <div class='ml-5'>
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
                </li>
                <li class='py-7.5 first:pt-0'>
                  <div class='relative flex'>
                    <img
                      src='/images/hero-bg-2.jpg'
                      class='aspect-[6/5] w-29 rounded-md object-cover'
                    />
                    <div class='ml-5'>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='w-3/12'>
          <div class='h-9 w-full border-b-2 border-b-red-100'>
            <h4 class='inline-flex h-full items-center bg-red-100 px-5 text-sm font-bold text-red-500'>Categories</h4>
          </div>
          <div class='mt-12'>
            <ul class='space-y-1'>
              <li>
                <div class='relative flex h-23 w-full items-center'>
                  <img
                    src='/images/hero-bg-2.jpg'
                    class='absolute -z-20 h-23 w-full object-cover'
                  />
                  <div class='absolute -z-10 h-full w-full bg-black/25' />
                  <div class='mx-5 rounded-md bg-white/30 px-5 text-sm font-bold leading-[30px] text-white'>Travel</div>
                </div>
              </li>
              <li>
                <div class='relative flex h-23 w-full items-center'>
                  <img
                    src='/images/hero-bg-2.jpg'
                    class='absolute -z-20 h-23 w-full object-cover'
                  />
                  <div class='absolute -z-10 h-full w-full bg-black/25' />
                  <div class='mx-5 rounded-md bg-white/30 px-5 text-sm font-bold leading-[30px] text-white'>Fashion</div>
                </div>
              </li>
              <li>
                <div class='relative flex h-23 w-full items-center'>
                  <img
                    src='/images/hero-bg-2.jpg'
                    class='absolute -z-20 h-23 w-full object-cover'
                  />
                  <div class='absolute -z-10 h-full w-full bg-black/25' />
                  <div class='mx-5 rounded-md bg-white/30 px-5 text-sm font-bold leading-[30px] text-white'>Health</div>
                </div>
              </li>
              <li>
                <div class='relative flex h-23 w-full items-center'>
                  <img
                    src='/images/hero-bg-2.jpg'
                    class='absolute -z-20 h-23 w-full object-cover'
                  />
                  <div class='absolute -z-10 h-full w-full bg-black/25' />
                  <div class='mx-5 rounded-md bg-white/30 px-5 text-sm font-bold leading-[30px] text-white'>Nature</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}, {
  name: 'MainPosts'
})
