import React from 'react'
import { Timeline, Card } from 'antd';

import { useQueryThreads } from '../../apollo/hooks'


const Home = ({ onSelectTweet }: any) => {
   const { data, loading, error } = useQueryThreads()

   console.log({ data, loading, error })

   if (loading) {
      return <div>loading</div>
   }

   return (
      <div>
         <span>Scheduled</span>
         <Card style={{ width: 500 }}>
            <Timeline>
               {
                  data.tweets.scheduled.map((t: any) => (
                     <Timeline.Item key={t._id}>
                        <div onClick={() => onSelectTweet(t)}>
                           <div>{t.messages[0]}</div>
                           <div>{new Date(t.timeToPost).toLocaleString()}</div>
                        </div>
                     </Timeline.Item>
                  ))
               }
            </Timeline>
         </Card>
      </div>
   )
}

export default Home