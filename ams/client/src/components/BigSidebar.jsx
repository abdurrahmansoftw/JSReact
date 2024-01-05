import Wrapper from '../assets/wrappers/BigSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import NavLinks from './NavLinks'
const BigSidebar = () => {
  const { showSidebar } = useDashboardContext()

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }>
        <div className='content'>
          <header>Amplicent Management System</header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  )
}
export default BigSidebar
