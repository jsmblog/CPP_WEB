import { useState } from "react"


const FirstBtn = ({letterX}) => {
    
  const [btnOne, setBtnOne] = useState(false)

  const handleClickBtnOne = () => {
    setBtnOne(!btnOne)
    console.log(btnOne)
  }
  const btnOneVisibility = (btnOne) ? "btnOneV" : ""
  
  
  return (
    <>
    <div className="BtnVarAndDT">
      <button onClick={handleClickBtnOne}>
        VARIABLES AND DATA TYPES
      </button>
    </div>
      <div className={`${btnOneVisibility} container container_position`}>
        <div>
          <img onClick={handleClickBtnOne} className="CloseBtn" width={35} src={letterX} alt="" />
        </div>
      <div className="content">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit laborum eius porro atque minus provident perferendis praesentium ea cum ut fugiat ad, culpa dolor non, voluptatem iusto, repellat dicta tempore aliquam. Adipisci ex iusto qui, laudantium maiores quidem consectetur illum earum labore impedit illo magni modi eius sit. Veniam officia accusamus dolor. Consequuntur in a est nihil error eligendi officia atque veniam quasi unde nostrum voluptates ab rem asperiores illo doloribus eum corporis, veritatis animi aut dicta! Aperiam doloremque consequatur unde deserunt atque et rem nostrum doloribus quidem, quibusdam, velit molestiae nihil sequi hic reiciendis nam. Odit nemo sunt sit tempore ab beatae ipsam nesciunt. Eveniet, fugiat? Reprehenderit numquam labore harum dolore molestias ea adipisci corrupti in deleniti blanditiis, facere dolorem tenetur nisi perferendis eos amet a autem ipsam reiciendis! Fugit suscipit nihil labore minus, in deserunt, iusto, quasi voluptas quidem vero soluta hic. Hic reprehenderit tenetur unde ex non velit nulla fuga libero eveniet suscipit veniam quidem corrupti quibusdam maiores enim explicabo pariatur ut, sint neque eligendi voluptatem ab beatae doloribus! Ea, quibusdam, ducimus est ut maxime sequi commodi nam ratione iusto error tempore. Recusandae possimus iusto ipsam, commodi cum tempora accusamus qui dolorem assumenda rerum nemo quia sed amet, aperiam natus iure corrupti incidunt nisi neque. Illum iste eaque, eligendi tempora repellat saepe aperiam. Velit neque totam id rerum sequi ipsum aut blanditiis labore placeat nihil sint expedita nam praesentium, reprehenderit similique aperiam quisquam deleniti. Vel ipsum repudiandae voluptatem, laboriosam adipisci obcaecati fuga quo incidunt quisquam, tempora quae totam! Magni quaerat facilis voluptatibus animi. Enim autem aliquid temporibus mollitia officia provident ea! Voluptatem ratione laborum totam cupiditate saepe non exercitationem. Ducimus autem molestias placeat cumque eaque consequuntur minima ea ipsum sed dolores molestiae qui id veritatis, aut nobis temporibus voluptatem doloribus nihil maxime explicabo praesentium nostrum? Nulla blanditiis est sint quibusdam adipisci autem quod delectus repellat? Fugit eligendi voluptatum magni eius mollitia in, voluptas impedit fugiat animi quo, dicta aut repudiandae laudantium et? Iure quod ducimus eum pariatur modi quo excepturi doloremque omnis saepe rerum, ratione neque facilis impedit? Nostrum, deserunt quod sequi quo dolor minima pariatur adipisci laudantium iusto. Aliquam, vitae odit accusamus omnis illo eaque non, optio nulla, animi earum vero? Ab officia animi ducimus maxime iure, assumenda reprehenderit eligendi architecto nam quas atque repudiandae, deleniti odit sed corporis maiores distinctio, iste non expedita. Error aperiam hic quod provident quos minus, distinctio sunt cupiditate atque reprehenderit tempore esse laboriosam nihil nemo libero corrupti iste. Doloribus nisi optio, quae odio nihil beatae culpa accusamus, possimus quam distinctio itaque harum ipsa, eligendi omnis velit quas! Totam, hic! Ipsum dignissimos asperiores sapiente, quisquam ab ea iusto magni consequatur perferendis facilis hic error. Nostrum obcaecati nobis nemo magni maiores sequi quod at dolorem, voluptatem impedit laboriosam perspiciatis dolor voluptates consectetur dolorum aut aliquam, quo temporibus quis doloremque eaque? Quasi vitae neque nostrum totam unde. Officiis impedit voluptate sint praesentium sunt distinctio voluptatum, nostrum ex maiores quos consequatur velit odio quidem, unde aspernatur tempore suscipit! Error aspernatur asperiores aut quas!</p>
      </div>
    </div>
    </>
  )
}

export default FirstBtn