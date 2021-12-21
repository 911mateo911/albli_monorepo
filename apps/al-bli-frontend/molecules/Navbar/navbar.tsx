import { FC, useState } from 'react';
import { Navbar, SlideDrawer, Hoversearch } from '@al-bli/albli-ui';
import { useRouter } from 'next/router';

export const NavbarComponent: FC = () => {
    const [drawerOpened, setDrawerOpened] = useState<boolean>(false);
    const [isSearchOpen, setSearchOpen] = useState<boolean>(false);

    return (
        <div>
            <Navbar
                onMenuToggle={() => setDrawerOpened(!drawerOpened)}
                title='al-Bli'
                onSearchToggle={() => setSearchOpen(true)}
            />
            <SlideDrawer
                open={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                slideFrom='left'
            />
            {useRouter().pathname !== '/search' && <Hoversearch
                open={isSearchOpen}
                onClose={() => setSearchOpen(false)}
            />}
        </div>
    )
}
