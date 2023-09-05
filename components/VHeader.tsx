import { NuxtLink } from '#components'

export default defineComponent(() => {
  return () => (
    <div class='sticky h-24 shadow-md'>
      <div class='mx-auto flex h-full items-center lg:w-[1000px] xl:w-[1200px]'>
        <div class='w-3/12' />
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
