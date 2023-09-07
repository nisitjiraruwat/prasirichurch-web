import dayjs from 'dayjs'

import { Icon, NuxtLink } from '#components'

export default defineComponent(() => {
  return () => (
    <div>
      <div class='w-full pt-15'>
        <img
          src='/images/posts/1.jpeg'
          class='aspect-[3/1] w-full object-cover'
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
                โครงการขายออนไลน์
              </h3>
            </div>
            <div class='mt-6 text-lg text-neutral-500'>
              <h4 class='text-xl font-bold'>หลักการเเละเหตุผล</h4><br />
              &nbsp; &nbsp; &nbsp; &nbsp; เนื่องจากปัจจุบันโลกได้เข้าสู่ยุคของการขายของผ่านสื่อออนไลน์ และผู้คนหันมาซื้อของ จับจ่าย ผ่านช่องทางออนไลน์มากขึ้น<br />
              &nbsp; &nbsp; &nbsp; &nbsp; อีกทั้งสื่อออนไลน์สามารถเข้าถึงกลุ่มลูกค้าอย่างหลากหลาย และสะดวกสบายในการประกอบธุรกิจ ทั้งการขนส่ง และการชำระเงิน โดยไม่ต้องมีต้นทุนสูงในการประกอบธุรกิจ<br />
              &nbsp; &nbsp; &nbsp; &nbsp; การขายของออนไลน์นี่สอดคล้องกับเป้าหมายของคริสตจักรในปี 2022 ของคริสตจักรพระสิริเชียงใหม่ คือหัวข้อ “ ผู้รับใช้ ” Servant

              <br /><br /><h4 class='text-xl font-bold'>เป้าหมาย</h4><br />
              &nbsp; &nbsp;&nbsp; &nbsp;สมาชิกคริสตจักรพระสิริที่ประกอบธุรกิจส่วนตัว เข้าร่วมกิจกรรมร้อยละ 90 ของสมาชิกทั้งหมดที่ประกอบ
              ธุรกิจส่วนตัว<br /><br />
              &nbsp; &nbsp;&nbsp; &nbsp;ได้กำไรจากการขายของออนไลน์ 480,000 บาท ภายในระยะเวลา 1 ปี (หักค่าใช้จ่ายทั้งหมด)

            </div>
          </div>
          <div class='w-3/12 pl-12 pt-15'>
            <ul class='space-y-4 border-t border-t-neutral-200 pt-12'>
              <li class='py-7.5 first:pt-0'>
                <div class='flex'>
                  <NuxtLink to='/posts/postb'>
                    <img
                      src='/images/posts/2.jpg'
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
                      <NuxtLink to='/posts/postb'>โครงการเงินตลันต์</NuxtLink>
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
  name: 'PostA'
})
