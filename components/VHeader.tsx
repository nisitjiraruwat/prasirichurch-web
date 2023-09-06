import { NuxtLink } from '#components'

export default defineComponent(() => {
  return () => (
    <div class='sticky h-26.5 shadow-md'>
      <div class='mx-auto flex h-full w-full items-center px-3 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
        <div class='w-3/12'>
          <img
            src='/images/logo.png'
            class='h-24'
          />
        </div>
        <div class='w-7/12'>
          <ul class='flex justify-center space-x-16'>
            <li>
              <NuxtLink
                class='font-bold'
                to='/'
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class='font-bold'
                to='/about'
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class='font-bold'
                to='/contact'
              >
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class='w-2/12'/>
      </div>
    </div>
  )
}, {
  name: 'VHeader'
})
