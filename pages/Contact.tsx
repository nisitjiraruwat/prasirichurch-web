export default defineComponent(() => {
  const members = ref([
    {
      id: 1,
      name: 'ประเสริฐ  สืบทายาท',
      role: 'ตำแหน่ง',
      address: '241 หมู่ 5 ซอย 10 ต.สันพระเนตร อ.สันทราย  จ.เชียงใหม่ 50210',
      phone: '+6680-1905-773',
      email: '-'
    },
    {
      id: 2,
      name: 'ชื่อ',
      role: 'ตำแหน่ง',
      address: '-',
      phone: '-',
      email: '-'
    },
    {
      id: 3,
      name: 'ชื่อ',
      role: 'ตำแหน่ง',
      address: '-',
      phone: '-',
      email: '-'
    }
  ])

  return () => (
    <div class='bg-white'>
      <div class='mx-auto w-full px-7.5 py-15 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6729.428010156732!2d99.03605082959622!3d18.808696509220947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2516f37f1009%3A0x8545dee4494f7012!2z4LiE4Lij4Li04Liq4LiV4LiI4Lix4LiB4Lij4Lie4Lij4Liw4Liq4Li04Lij4Li04LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sen!2sth!4v1694018022124!5m2!1sen!2sth'
          class='aspect-[21/9] w-full border-0'
          allowfullscreen='false'
          referrerpolicy='no-referrer-when-downgrade'
        />
      </div>
      <div class='bg-neutral-100'>
        <div class='mx-auto w-full px-30 py-15 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
          <div class='grid grid-cols-3 gap-15'>
            {members.value.map((member) => {
              return (
                <div
                  key={`member-${member.id}`}
                  class='flex w-full flex-col bg-white p-10'
                >
                  <h4 class='border-b border-b-neutral-300 pb-4.5 text-xl font-bold'>{member.role}</h4>
                  <ul class='mt-8 space-y-3.5'>
                    <li class='space-x-2'>
                      <label>Name:</label>
                      <span class='text-neutral-500'>{member.name}</span>
                    </li>
                    <li class='space-x-2'>
                      <label>Address:</label>
                      <span class='text-neutral-500'>{member.address}</span>
                    </li>
                    <li class='space-x-2'>
                      <label>Phone:</label>
                      <span class='text-neutral-500'>{member.phone}</span>
                    </li>
                    <li class='space-x-2'>
                      <label>Email:</label>
                      <span class='text-neutral-500'>{member.email}</span>
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}, {
  name: 'Contact'
})
