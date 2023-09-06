import { Icon, NuxtLink } from '#components'

export default defineComponent(() => {
  return () => (
    <div class='bg-neutral-950 py-15'>
      <div class='mx-auto flex h-full w-full px-3 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
        <div class='flex-1'>
          <img
            src='/images/logo.png'
            class='h-12 -translate-x-2'
          />
          <div class='mt-6 w-80 text-neutral-400'>
            จงมอบคำสอนเหล่านั้น ซึ่งท่านได้ยินจากข้าพเจ้าต่อหน้าพยานหลายคน ไว้กับคนที่ซื่อสัตย์ที่สามารถสอนคนอื่นได้ด้วย<br />
            <div class='mt-1 text-right'>2 ทิโมธี 2:2</div>
          </div>
          <div class='mt-6'>
            <ul class='flex space-x-4'>
              <li>
                <a
                  href='https://www.facebook.com/PSRCM2020/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div class='flex h-12 w-12 items-center justify-center bg-white/5 hover:bg-[#1877f2]'>
                    <Icon
                      class='text-[24px] text-white'
                      name='bx:bxl-facebook'
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class='flex-1 flex-col'>
          <h3 class='text-xl font-bold text-white'>Info</h3>
          <ul class='mt-10 space-y-4'>
            <li>
              <NuxtLink
                class='text-neutral-400 hover:text-white'
                to='/about'
              >
                About us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class='text-neutral-400 hover:text-white'
                to='/contact'
              >
                Contact us
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}, {
  name: 'VFooter'
})
