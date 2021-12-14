import { FC, useState } from 'react';
import { Navbar, SlideDrawer } from '@al-bli/albli-ui';

export const NavbarComponent: FC = () => {
    const [drawerOpened, setDrawerOpened] = useState<boolean>(false);

    return (
        <div>
            <Navbar
                onMenuToggle={() => setDrawerOpened(!drawerOpened)}
                title='al-Bli'
            />
            <SlideDrawer
                open={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                slideFrom='left'
            />
        </div>
    )
}
