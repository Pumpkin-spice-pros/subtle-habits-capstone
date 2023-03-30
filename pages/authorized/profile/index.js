import SignOutButton from "../../../components/SignOutButton";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

import Avatar from "../../../components/Avatar";
import Card from "../../../components/Card";
import FriendInfo from "../../../components/FriendInfo";
import Layout from "../../../components/Layout";
import PostCard from "../../../components/Postcard";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Profile () {
    const router = useRouter();
    const {asPath:pathname} = router;
    const isPosts = pathname.includes('posts') || pathname === '/profile';
    const isAbout = pathname.includes('about');
    const isFriends = pathname.includes('friends');
    const isPhotos= pathname.includes('photos');
    const tabClasses= 'flex gap-1 px-3 py-1 items-center';
    const activeTabClasses= 'flex gap-1 px-3 py-1 items-center border-emerald-500 border-b-4 text-emerald-500 rounded-t-md';
    return(
       <Layout> 
        <Card noPadding={true}>
            <div className="relative overflow-hidden rounded-md">
            <div className="h-36 overflow-hidden flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1518489913881-199b7c7a081d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt=""/>
            </div>
            <div className="absolute top-24 left-4">           
         <Avatar size={'lg'} />
            </div>
         <div className="p-4 pb-0">
            <div className="ml-40 ">
            <h1 className="text-xl font-bold">
            XxXMILFHunter69XxX
            </h1>
            <div className="text-gray-500 leading-4"> In your mom</div>     
            </div>
            <div className="mt-10 flex gap-5">
            <Link href={'/profile/posts'} className={isPosts ? activeTabClasses : tabClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            Posts
            </Link> 
            <Link href={'/profile/about'} className={isAbout ? activeTabClasses : tabClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            About
            </Link> 
            <Link href={'/profile/friends'} className={isFriends ? activeTabClasses : tabClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            Friends
            </Link> 
            <Link href={'/profile/photos'} className={isPhotos ? activeTabClasses : tabClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            Photos
            </Link>    
            </div>       
         </div>
         </div>
        </Card>
        {isPosts && (
            <div>
                  <PostCard/>
            </div>
        )}
        {isAbout && (
            <div>
              <Card>
              <h2 className="text-2xl mb-4">About Me </h2>  
              <p className="mb-4 text-sm">Things I'd rather be doing right now...</p>
              <p className="mb-4 text-sm">Your Mom!</p>
              </Card>  
            </div>
        )}
        {isFriends && (
            <div>
                <Card>
                    <h2>Friends</h2>
                    <div className="grid gap-6 grid-cols-2">
                        <FriendInfo/> 
                        <FriendInfo/> 
                        <FriendInfo/> 
                        <FriendInfo/> 
                        <FriendInfo/> 
                        <FriendInfo/> 
                        <FriendInfo/> 
                        <FriendInfo/> 
                    </div>
                </Card>
            </div>
        )}
        {isPhotos && (
            <div>
                <Card>
                  <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md overflow-hidden h-48 flex items-center">
                       <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=" " /> 
                    </div>
                    <div className="rounded-md overflow-hidden h-48 flex items-center">
                       <img src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=" " /> 
                    </div>
                    <div className="rounded-md overflow-hidden h-48 flex items-center">
                       <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt=" " /> 
                    </div>
                    <div className="rounded-md overflow-hidden h-48 flex items-center">
                       <img src="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt=" " /> 
                    </div>
                  </div>
                </Card>
            </div>
        )}
        <SignOutButton/>
       </Layout>
    )
}