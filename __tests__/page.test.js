import { screen,render,fireEvent } from "@testing-library/react";
import Testss from "../component/trt"
import Notes from "../src/app/posts"
import {PostProvider,PostContext} from "../src/context/PostContext"
import Add from "../src/app/add/page"
import Edit from "../src/app/edit/[id]/page"
test("Adding section",()=>{
    render(
    <PostProvider>
       <Add />
    <Notes/>
    </PostProvider>)
    const l=screen.getByPlaceholderText("Add Notee")
    fireEvent.change(l,{target:{value:"adding"}})
    const b=screen.getByText("Add mee")
    fireEvent.click(b)
    const l1=screen.getByText("Note: adding")
    expect(l1).toBeInTheDocument()

})
test("update Section",()=>{
    render(
        <PostProvider>
            <Notes/>
           <Edit/>
        </PostProvider>
    )
    console.log(Edit)
    const btn=screen.getByText("Edit1")
    const elem=screen.getByTitle('input')
    fireEvent.change(elem,{target :{value:"Hey"}})
    fireEvent.click(btn)
    const l1=screen.getByText("Note: Hey")
    expect(l1).toBeInTheDocument()


})
test("deleting section",async ()=>{
    render(
        <PostProvider>
            <Notes/>

        </PostProvider>
    )
    const b1=screen.getByText("Delete")
    fireEvent.click(b1)
    const submitButton = screen.queryByText('Delete')
    expect(submitButton).toBeNull()

})