import { Icon } from '#components'

import LineIcon from '~/components/icons/LineIcon'

export default defineComponent(() => {
  const members = ref([
    {
      id: 1,
      name: 'ชื่อ',
      role: 'ตำแหน่ง'
    },
    {
      id: 2,
      name: 'ชื่อ',
      role: 'ตำแหน่ง'
    },
    {
      id: 3,
      name: 'ชื่อ',
      role: 'ตำแหน่ง'
    },
    {
      id: 4,
      name: 'ชื่อ',
      role: 'ตำแหน่ง'
    },
    {
      id: 5,
      name: 'ชื่อ',
      role: 'ตำแหน่ง'
    },
    {
      id: 6,
      name: 'ชื่อ',
      role: 'ตำแหน่ง'
    }
  ])

  return () => (
    <div class='bg-white'>
      <div class='mx-auto w-full px-7.5 py-15 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
        <img
          src='/images/about-landing.jpg'
          class='w-full'
        />
        <div class='mt-15 flex space-x-8'>
          <div class='flex-1'>
            <h4 class='border-b border-b-neutral-300 pb-4.5 text-xl font-bold'>About Us</h4>
            <div class='mt-4 text-lg text-neutral-500'>
              Are looking beyond ideation stage to, at the very least, beta, and for companies corporate-ready. Retailers want to see it all, so they usually have not precisely identified one tech they want to focus on. Even so, many believe there are less problematic and more effective ways to approach outdoors overcrowding than to avoid geotagging – it’s just not that simple. In her blog post, Williams recommends structural reforms for the USA,
            </div>
          </div>
          <div class='flex-1'>
            <h4 class='border-b border-b-neutral-300 pb-4.5 text-xl font-bold'>Mission & Vision</h4>
            <div class='mt-4 text-lg text-neutral-500'>
              Are looking beyond ideation stage to, at the very least, beta, and for companies corporate-ready. Retailers want to see it all, so they usually have not precisely identified one tech they want to focus on. Even so, many believe there are less problematic and more effective ways to approach outdoors overcrowding than to avoid geotagging – it’s just not that simple. In her blog post, Williams recommends structural reforms for the USA,
            </div>
          </div>
        </div>
      </div>
      <div class='bg-neutral-100'>
        <div class='mx-auto w-full px-30 py-15 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
          <h3 class='text-center text-3xl font-bold'>คณะกรรมการ</h3>
          <div class='mt-7.5 grid grid-cols-3 gap-15'>
            {members.value.map((member) => {
              return (
                <div
                  key={`member-${member.id}`}
                  class='flex h-80 w-72 flex-col bg-white pt-12'
                >
                  <div class='flex w-full justify-center'>
                    <img
                      src={`/images/members/${member.id}.jpg`}
                      class='h-[140px] w-[140px] rounded-full object-cover'
                    />
                  </div>
                  <div class='mt-5.5 text-center text-sm text-neutral-600'>{member.role}</div>
                  <div class='mt-1 text-center text-xl'>{member.name}</div>
                  <div class='flex flex-1 items-end justify-center space-x-0.5'>
                    <div class='flex h-10 w-10 items-center justify-center bg-neutral-200 text-neutral-500 hover:bg-[#1877f2] hover:text-white'>
                      <Icon
                        class='text-[24px]'
                        name='bx:bxl-facebook'
                      />
                    </div>
                    <div class='flex h-10 w-10 items-center justify-center bg-neutral-200 text-neutral-500 hover:bg-[#00c300] hover:text-white'>
                      <LineIcon />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}, {
  name: 'About'
})
