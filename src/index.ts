import  express, { Request, Response }  from "express";
import { connectDB, prisma } from "./conflig/db";
import { tudo_list } from './type/user'
import {v4 as uuidv4} from 'uuid'
import { Movie,User,Comment  } from "@prisma/client";





const app =express()
const PORT =3002

app.use(express.json())

connectDB()
// //get
// app.get('/api/git', async(req:Request,res:Response) => {
//     const users = await prisma.user.findMany()
//     return res.json(users)
// })
// app.post('/adduser',async  (req: Request, res: Response) => {
//     const newuser = req.body as User;
//     await prisma.user.create({
//         data: newuser
//     });
//     return res.json('user added');
// });

// app.put('/updateuser/:id', async (req: Request, res: Response) => {
// const {id} = req.params
// const user = req.body as User
// await prisma.user.update({
//     where: { id: id },
//     data: user
// })
// res.json('user updated')
// })

// app.delete('/deleteuser/:id', async (req: Request, res: Response) => {
//     const {id} = req.params
//     await prisma.user.delete({
//         where: { id:(id) }
//     })
//     res.json('user deleted')
// })
// Register
// app.post('/Register',async  (req: Request, res: Response) => {
//     const newuser = req.body as User;
//     await prisma.user.create({
//         data: newuser
//     });
//     return res.json('user added');
// });

// //get all users
// app.get('/api/git', async(req:Request,res:Response) => {
//     const users = await prisma.user.findMany()
//     return res.json(users)
// });
 
// // app.delete('/deleteuser:id', async (req: Request, res: Response) => {
// //     const {id} = req.params
// //     await prisma.user.delete({
// //         where: { id:(id) }
// //     })
// //     res.json('user deleted')
// // })
// app.post('/creat/blog',async  (req: Request, res: Response) => {
//     const newuserr   = req.body as Blog;
//     await prisma.blog.create({
//         data:newuserr
//     })
//     return res.json('blog added');
// });
// app.get('/blog/git', async(req:Request,res:Response) => {
//     const users = await prisma.blog.findMany()
//     return res.json(users)
// });
// app.get('/userblogs/:id',async(req:Request,res:Response)=>{
//     const {id} = req.params
//     const userId = await prisma.blog.findMany({
//         where: {
//           user_id:id,
//         },
//         select: {
//           title: true,
//           creatdata: true,
//           id: true,
//           user: {
//             select: {
//               username: true,
//               email: true,
//             },
//           },
//         },
//       });
//       res.json(userId);
// })
// app.delete('/deleteuser/:id', async (req: Request, res: Response) => {
//     const {id} = req.params
//     await prisma.blog.delete({
//         where: { id:id }
//     })
//     res.json('user deleted')
// })
// app.post('/api/login', async (req: Request, res: Response))



// app.post('/addteachert',async  (req: Request, res: Response) => {
//     const newuser = req.body as Teacher;
//     await prisma.teacher.create({
//         data: newuser
//     });
//     return res.json('teacher prisent');
// });


// app.get('/teacher/git', async(req:Request,res:Response) => {
//         const users1 = await prisma.teacher.findMany()
//         return res.json(users1)
//     })

    
//     // ----------------------------------------------------------------------------
// app.post('/addstudent',async  (req: Request, res: Response) => {
//     const newuser = req.body as Student;
//     await prisma.student.create({
//         data: newuser
//     });
//     return res.json('student prisent');
// });


// app.get('/student/git', async(req:Request,res:Response) => {
//         const users2 = await prisma.student.findMany()
//         return res.json(users2)
//     })
//    // ----------------------------------------------------------------------------
//    app.post('/addclassroom',async  (req: Request, res: Response) => {
//     const newuser = req.body as ClassRoom;
//     await prisma.classRoom.create({
//         data: newuser
//     });
//     return res.json('classroom added');
// });


// app.get('/api/git', async(req:Request,res:Response) => {
//         const users3 = await prisma.classRoom.findMany()
//         return res.json(users3)
//     })









//     app.get('/classRoom/:id',async(req:Request,res:Response)=>{
//             const {id} = req.params
//             const userId = await prisma.classRoom.findMany({
//              where:{
//                 id:id,
//              },select:{
//                 name:true,
//                 teacher:true,
//                 student:true
                
//              }
//             })   
//               res.json(userId);
//         })





//  user  ----------------------------------------------------------------------------
app.post('/adduser',async  (req: Request, res: Response) => {
    const newuser1 = req.body as User;
    await prisma.user.create({
        data: newuser1
    });
    return res.json('user add');
});



app.get('/mo/git', async(req:Request,res:Response) => {
        const users9 = await prisma.user.findMany()
        return res.json(users9)
    })
app.get('/user/:id',async(req:Request,res:Response)=>{
    const {id} = req.params
    const userId3 = await prisma.user.findMany({
     where:{
        id:id,
     },select:{
        comments:true,
        
     }
    })   
      res.json(userId3);
})


app.put('/updateuser/:id', async (req: Request, res: Response) => {
const {id} = req.params
const user1 = req.body as User
await prisma.user.update({
    where: { id: id },
    data: user1
})
res.json('user updated')
})



app.delete('/deleteuser/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    await prisma.user.delete({
        where: { id:(id) }
    })
    res.json('user deleted')
})


//movie ---------------------------------------------------------
app.post('/addmovie',async  (req: Request, res: Response) => {
    const newuser2 = req.body as Movie;
    await prisma.movie.create({
        data: newuser2
    });
    return res.json('movie add');
});



app.get('/movie/git', async(req:Request,res:Response) => {
         const users2 = await prisma.movie.findMany()
        return res.json(users2)
    });




     app.get('/chois/:id',async(req:Request,res:Response)=>{
            const {id} = req.params
            const userId1 = await prisma.movie.findMany({
             where:{
                id:id,
             },select:{
                title:true,
                duration:true,
                rating:true,
                genre:true
                
             }
            })   
              res.json(userId1);
        })


        app.get('/movie/:id',async(req:Request,res:Response)=>{
            const {id} = req.params
            const userId3 = await prisma.movie.findMany({
             where:{
                id:id,
             },select:{
                comments:true,
                
             }
            })   
              res.json(userId3);
        })

        // app.get('/movie/:id',async(req:Request,res:Response)=>{
        //     const {id} = req.params
        //     const userId3 = await prisma.movie.findMany({
        //      where:{
        //         id:id,
        //      },select:{
        //         comments:true,
                
        //      }
        //     })   
        //       res.json(userId3);
        // })
        app.get('/movie/:rating', async(req:Request,res:Response) => {
            const users3 = await prisma.movie.findMany()
           return res.json(users3)
       });

// comment ------------------------------------------------------------------------------------

app.post('/addcomment',async  (req: Request, res: Response) => {
    const newuser = req.body as Comment;
    await prisma.comment.create({
        data: newuser
    });
    return res.json('comment added successfully');
});


app.put('/updatecomment/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    const user4 = req.body as Comment
    await prisma.user.update({
        where: { id: id },
        data: user4
    })
    res.json('user updated')
    })




    app.delete('/deletecomment:id', async (req: Request, res: Response) => {
        const {id} = req.params
        await prisma.comment.delete({
            where: { id:(id) }
        })
        res.json('user deleted')
    })
    





app.listen(PORT,() => {
    console.log(`server good ${PORT}`);
})