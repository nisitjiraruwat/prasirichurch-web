import dayjs from 'dayjs'

import { Icon, NuxtLink } from '#components'

export default defineComponent(() => {
  return () => (
    <div>
      <div class='w-full pt-15'>
        <img
          src='/images/posts/2.jpg'
          class='aspect-[3/1] w-full object-cover object-top'
        />
      </div>
      <div class='w-full bg-gray-100'>
        <div class='mx-auto flex w-full px-15 pb-15 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
          <div class='-mt-25 w-9/12 bg-white p-12'>
            <div>
              <div class='flex items-center space-x-4'>
                <div class='inline-block rounded bg-red-500 px-4 text-sm font-bold leading-8 text-white'>Technology</div>
                <div class='flex items-center space-x-1 text-neutral-500'>
                  <Icon
                    class='text-[24px]'
                    name='ic:baseline-calendar-month'
                  />
                  <div class='text-sm'>{dayjs().format('MMMM DD, YYYY')}</div>
                </div>
              </div>
              <h3 class='mt-4 text-[40px] font-bold'>
                โครงการเงินตลันต์
              </h3>
            </div>
            <div class='mt-6 text-lg text-neutral-500'>
              <h4 class='text-xl font-bold'>หลักการเเละเหตุผล</h4><br />
              &nbsp; &nbsp; &nbsp; &nbsp; สมาชิกคริสตจักรพระสิริเชียงใหม่ได้ร่วมกันทำโครงการออมวันละ 1 บาท เพื่อจัดหางบประมาณในการก่อสร้างอาคารนมัสการพระเจ้า 20 ล้าน ซึ่งโครงการดังกล่าวได้ทำสำเร็จลุล่วงถึงเป้าหมายตามที่คริสตจักรตั้งไว้ <br />
              &nbsp; &nbsp; &nbsp; &nbsp; จึงเห็นว่าเงินที่ได้จากการทำโครงการดังกล่าว น่าจะนำไปต่อยอดให้เกิดผลได้ ตามความสามารถของประทานและสมาชิกคริสตจักร<br />

              <br /><br /><h4 class='text-xl font-bold'>ผลที่คาดว่าจะได้รับ</h4><br />
              &nbsp; &nbsp;&nbsp; &nbsp;1. สมาชิกได้ทำโครงการเงินตะลันต์ร่วมกัน<br />
              &nbsp; &nbsp;&nbsp; &nbsp;2. สมาชิกได้ทำพันธกิจของพระเจ้าตามของประทาน<br />
              &nbsp; &nbsp;&nbsp; &nbsp;3. ได้งบประมาณในการก่อสร้างอาคารนมัสการพระเจ้า 20 ล้าน เพิ่มขึ้น<br />

            </div>
          </div>
          <div class='w-3/12 pl-12 pt-15'>
            <ul class='space-y-4 border-t border-t-neutral-200 pt-12'>
              <li class='py-7.5 first:pt-0'>
                <div class='flex'>
                  <NuxtLink to='/posts/posta'>
                    <img
                      src='/images/posts/1.jpeg'
                      class='h-20 w-20 object-cover'
                    />
                  </NuxtLink>
                  <div class='ml-4'>
                    <div class='flex items-center space-x-1 text-neutral-500'>
                      <Icon
                        class='flex-none text-[14px]'
                        name='ic:baseline-calendar-month'
                      />
                      <div class='whitespace-nowrap text-sm'>{dayjs().format('MMMM DD, YYYY')}</div>
                    </div>
                    <div class='line-clamp-2 font-bold hover:text-red-700'>
                      <NuxtLink to='/posts/posta'>โครงการขายออนไลน์</NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}, {
  name: 'PostB'
})
