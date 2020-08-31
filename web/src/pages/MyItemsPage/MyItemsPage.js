import MyItemsListCell from 'src/components/MyItemsListCell'
import { useAuth } from '@redwoodjs/auth/dist/useAuth'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const MyItemsPage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <MainLayout>
        <MyItemsListCell userId={currentUser.id} />
      </MainLayout>
    </>
  )
}

export default MyItemsPage
