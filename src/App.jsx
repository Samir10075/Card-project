import React from 'react'
import Card from './components/Card'


const App = () => {

 const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAACUCAMAAAA6cTwCAAABU1BMVEX09PTjPissokw6fOzxtQA0dev++/WgvPE2eeurwfD09fP6+PP18/Xi5vIpeOsuoU0AmS/y9vvysgAro0ny9vDkPTDy+PhSiuwAmzcankHP49T38vjt6Ojx29riNyHiIwDjMRvyvkbzwEDy26/wuSbz2qZLrGNAgut2vITt+u7v4eH37unz6Ozz1tDvxbnrqJrth3TralLkSS3kCgDpZlftkIDtz8LqeXDiW0zuv7rlqqLohHjhRjPqamTxy83lcWTjVT/gPTrl0r/onZrqlYrr39P13OfuqrDfaDLw043xqADqcyjogxz2wcjtlg3oUyfyzHfjhoXkYCPr5MvsZgDA0OzwymjW4fd3mu2UsPNznORelO7puwiFohu42cLWsxdwpDLFrR6trhiVyKNcpkGbqSscb/BesXFFis8zjp8wlok9gdaBvpE0nms7i73S3L+bwc/7QjYBAAAJ/0lEQVR4nO2c+1fbyBXHJcUGMx4jZMmDpbFlZQFjIEDKJgFjB9gNtA2b7uaxJCFk3W6cjZPU2fb//6l35AIGNJJf4xHn+HtycoiPY/TxvXNfM5KiTDTRRBNNNNFEE000QmGKkWWhjggh8BL8oGCURgoiWPbl9S2sWCsrBqUGIVRRCsVicbWwRjGQwYuAZMm+wL4FIPdW1zc27/9lq/Q9qPNXaevBw81HxVWEDSL7CnsVwpjhFIrVze0dt1TyXFXN+VLhB1V1vVJJ3bm/WS2CJ2LwwvgLKQYp7tZ2ch6DCZTrep76oLZbtGA5xZ3JIgapPqh7Lo+mm6v+eAPeL/uSw0Xu7dVKJZe5WC4SKaeCV9bWEQE7xTL0QRy7t7HtlSJJrsjzHu7heEYJuKzq9pbXH4/PlKtV45aekIUsQvb21QF4fCa3tkYgQeG4cCGFYmPtYSk6GPCZvE1KFCs+aZcouwcD2udcpf09Eo9Azq6CFGuu11N4CzNTfbMQDyaWgHaGNJAvV91eo4b8pYTI2qE3CiBWIP3wI5EfyMnqdmlIf7tQzi3tKkRqXYQUsv6gz5QaiqR6T5DU6pX4S2g0BvKJAOkQUWk8UGVX1SGSUACR6tY3qMSsRDaGyapBcg/2iEQisuG6o/M4H6i+TjCVs46wYhkb9VFbqF4l8uKCgY9+GDWQWiWSDKSwxHqkeiN2uYN1QmURYcUoPOitUGAjEzZXYIJWnf8lQFAwoC2RVAVhjA57AqqrHjTpO4+3ay9e1Lb3D9TOcChA3tYewdJcDiOy2wuP631fqu3u/XW1ALkLKYV794rF3X2vFPBleOojeS7HFtFeLjIqgIvtHB5NGQS6U4wppQoCp0IGsdYPD653uywPyXM5sFFhP9zncuBt9e2qFVhJI0RWq7V69ydITqyQWp9EVKc5zz3cUPjjRUIKj2qX9Yabg8QqdREVo1yutLMOXUGoD5FC9dxMkFgNyc3rfihRzoPUHzkpRRaxHvqTV4+5nNSeiOyGm8jbXiXYilzkYGtSPfBUd0eqy4HQ6uMwItc9LBgYRY/eELyH9YtQnCpytyiMv4XFOc/dRRErqFtk9b7MxKr4X+zR30NM5C/yPq6QzWKpvJ6VCZOnxz/lOOVZDvobqweH6xLbv5SXWP0LwIlE9hmHyFX/sSLx4gaTsZRNJBI//xKMtCt/2ta38F0AyiaOX+ZuMpWeKPEY8/YjY4GZKJF9//7Z1nUkrxafrYXehZ77RGClG57nHqwSFPt94mvC6Ohuh4jp55dXkEobrPK5XUSIkoVEl45/Ui/apFxp+7bhKOzwhfU6m7g0UqJrMbkHRSO6loudrLXFbLeRspeLyTuUfXGDCJMfE9cFBYTPtFO8lYGOPs3eQMo+Y0jei1uYW0Hku5tEEPO2oJ4r3sJFBF63EgQEnvfSuy93Z25QGa+CiRLHv1YjnQ6lpwZUWiDREocokY32ucL0oDrBwtoN4zWHKPs60kTWm+SgettHT9yncGBgYEQLUUTYyiTvDKbUckZQ246UwiLP615FD7MyydSARLOiiBR6tMgx0XdrkaMClJkd0EZ3km8EOR3Gr7LBNso+t4QSnQiKdshY4kW6JbFE04KydwhRZGAYjuh0SghQCFFiIXqnZBiid1OCIoPxlEsUfcJ5GKKzFUGhIYwoesp9q4gWxRKl5gWtI8wnik6wsSSSto4mRH0Q8aO30HwkjCisZhCbYc+mBMU6usBrJpaiW/I4EiHMJXoevY86VBWUFlV8Hy1yiBajZ3XD1XViiLCCOETQ8Qm10bSodQRdOS80RIfvYYhmRHld2OSkF6IBu3LoYcURBQyJO0Tve/G6ZCpcXKKMsOkmdwL5/rcGjfqtxkyU5oOZ2CxI1C4BWUsEIWX/+S+totBwz7AUlA7XFIco+Vbg/aVG0MAu+7upaZoTMWnAKGIwijIcp0udCry9j9xcSNnEB1vXNLM57NwzPcNxuuSMJe7g0NVtWMbDPA6ANLPsDPvh7zhD19RJWty9peTo2q5l9vePusmINLs53BeJMsucYDf/RhF3cAhbV92OLSG2iJiR9KiVFK70zJ1gGyXfZkTuTBlX3e4PWEJ6h0jLV9AQMQkZZxwTzU4L3D9CyHh19zwggIE+XuAwS9mNIXwDnfAS7LKoGfH5b35+7nbZD2AfU7uUXR58mGsZZ7y4MJ8RS/T/k04QE/7opmHS7fagERylZz5xTJR8lxa8weufRoMyATwOXE7vJtLyzYGIEArZLkuerI0a4Zro0jEQwRIKkKk1BrhVAPou/Jbfaoh/zgGr7T6YehCRZuuN/j8QITSd4tlIWP96IYzo88RvgTgdJKfPC8AYQyriKvlGDMelkEIKH4MNdOF4fX7k1Al/hzZ5JoSiW1ixUCN/Pcx1W0lr9BWbKJr5tLzMI5oVnIyYoMRyWnwiHRyvyY6w9+Z8CJFpvsuBiYRWQBfCjRAbgePZFYf21tLQtHHK78ZZBTSeI25YCTFSJz40US+33yDqfOZlViaoF8Z0Igw7dhiSrtv5lgNBLOxq2KljpzI392WZm1yX2VhrTCfCcDMfaiSoxPW2g2jI43IwcpplG3z067+5oW5+jMcqrZYdgQSu124gzjgFU6XRLjNDgz2/feZY6dOb8R3ZQ8jRL3o9nkxbKzcthVIMEQ2Mxe5hgT8GvADm0czz/27qf960EsTzT6fiI/clkUIbUUD+xebntHbTsQr+PTnQ1eOC859mKz/X7bSmNvf1RkcO/z7LRJ9kGaEwakf6HfMpgMrntXKl0m63K5VKuWzn87Zftncr/+3ztSCeYtPusR4URdQq2yHVUBcV879zmf7Sufkm+9ufV5FSyVM09pswHLsHK/Uo3da+JLsDRGoZj3EV+YKvz9FHiKTPfVu+NFMqlRkzjz/17S069CwWxs+RUidTcs6PN2Bd9LSYekPSv6Q6RdHsjAwapvDGom+Z2lcWtqFxlXcanoKV9JGaaT6ZZEDyblmgjfLowgNYCQqI2dMpS56NEMJOKz86G2l6Xv8vlXybOQWkwKw5kEy7GbV1JlwWtdojy7W22ffgRYQwHtFiMu0WG47Jf/oyRCanYnMqtn6AtLYVk6f5guMXGkOXRPlyI2K/fXxizzlkAWKYbGvmK4UY+Fu3MDBB2zoAFXTDttlypD4vKFCIkkZloKhn6y02kogdESwnagFT1Jjohn3sSsPvv2PlcpcCpvwclORmb+5nzkHEln3N4cIUTzVabGVEIpmw7FpNi9J4P1ce4h6sCKdZKes2P0exyYNWrjQdQlkGikvQDhEGqAZQscmPfdlt6P4Yhb0GNA2n84jymC6fm2IzR6eDNdelvNZqNx3HUqi4e0JFqNOyIbYniamStlYcXysAwh7OpxBwTnH37Y5FGEfsVUw00UQTTTTRRBNNNKz+B41VQq/dNfVDAAAAAElFTkSuQmCC",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];

 


  return (

    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}

    </div>


  )
}

export default App
