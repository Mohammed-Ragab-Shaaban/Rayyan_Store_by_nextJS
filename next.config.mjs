import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:'http',
                hostname:'localhost',
                port:'1337',
                pathname: '/**' ,
            }
        ],
        
    }
};

export default withNextVideo(nextConfig, { folder: 'cd assets-videos' });