import React from "react";
import {Box, List, ListItem, ListIcon, Divider, LinkBox, LinkOverlay} from "@chakra-ui/layout";
import {MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite} from "react-icons/md";
import NextImage from 'next/image';
import NextLink from 'next/link';
import {IconType} from "react-icons";

interface NavMenu {
    name: string,
    icon: IconType,
    route: string,
}

const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: '/',
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search',
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: '/library',
    },
];

const musicMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistAdd,
        route: '/',
    },
    {
        name: 'Favorites',
        icon: MdFavorite,
        route: '/favorites',
    },
]

const playLists = new Array(30).fill(1).map((_, index) => `Palylist ${index + 1}`);

function Sidebar() {
    return (
        <Box width='100%' height='calc(100vh - 100px)' bg='black' paddingX='5px' color='gray'>
            <Box paddingY='20px' height='100%'>
                <Box width='120px' marginBottom='20px' paddingX='20px'>
                    <NextImage src='/main-decor.svg' height={60} width={120}/>
                </Box>
                <Box>
                    <List spacing={2}>
                        {navMenu.map(({name, icon, route}) => (
                            <ListItem paddingX='20px' fontSize='16px' key={name}>
                                <LinkBox>
                                    <NextLink href={route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={icon} color='white' marginRight='20px'>

                                            </ListIcon>
                                            {name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box>
                    <List spacing={2}>
                        {musicMenu.map(({name, icon, route}) => (
                            <ListItem padding='20px' fontSize='16px' key={name}>
                                <LinkBox>
                                    <NextLink href={route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={icon} color='white' marginRight='20px'>

                                            </ListIcon>
                                            {name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider color='gray.800' />
                <Box height='66%' overflowY='auto' paddingY='20px' >
                    <List>
                        {playLists.map(playlists => (
                            <ListItem paddingX='20px' key={playlists}>
                                <LinkBox>
                                    <NextLink href='/'>
                                        <LinkOverlay>
                                            {playlists}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    )
}


export default Sidebar;


