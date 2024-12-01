import { Button, Flex } from "antd"
import AuthProfileDropDown from "../../shared/AuthProfileDropDown"
import { inherits } from "util";

const Header = ()=>{
    return (
       <div className="main_header" style={{backgroundColor:'#1868db',padding:'8px'}}>
        <Flex justify="space-between" align = 'center'>
        <div style={{color:'white',fontFamily:'Sans-serif'}}>
            CRYPTO
        </div>
        <div>
           <Button> <AuthProfileDropDown /></Button>
        </div>
        </Flex>
       </div> 

    )
}
export default Header;