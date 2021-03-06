import React from "react"
import styled from "react-emotion"
import { graphql, Link } from "gatsby"
import presets, { colors } from "../../utils/presets"
import { rhythm, options } from "../../utils/typography"
import { vP } from "../gutters"
import Container from "../container"
import HomepageSection from "../homepage/homepage-section"
import { PriceIcon} from "../../assets/mobile-nav-icons"
import Button from "../button"

const PriceSections = styled('div')`
  display: flex;
  flex-direction: column;

  ${presets.Tablet}{
    flex-direction: row;
    margin: 0 -8px;
  }
`

const HeaderBgStyled = styled(`div`)`
  border-style: solid;
  border-width: 90px 1411px 23px 399px;
  position: absolute;
  border-color: ${colors.ui.bright} ${colors.ui.whisper} ${colors.ui.whisper} ${colors.ui.bright};
`

  const HeaderTitleStyled = styled(`div`)`
    text-align: center;
    position: relative;
    padding-top: 2.3rem;
    line-height: 0;
    font-size: 2.3rem;
    z-index: 1;
  `


const PriceContainerStyled = styled(`div`)`
  padding: 0 0 10px;
  & span{
    display: inline-block;
    transition: transform .5s;
    font-size: 2rem;
  }
`
const PriceSectionPriceHeader = ({
  price
})=>{
  return (
    <PriceContainerStyled>
      <span>{price}</span>
    </PriceContainerStyled>
  )
}

const PriceSectionRoot = styled(`section`)`
  flex-basis: calc(50% - 20px);
  flex-grow: 0;
  margin: 0 10px 20px;
  box-shadow: 0 1px 8px ${colors.gray.light};
  border-radius: ${presets.radiusLg}px;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &:hover ${HeaderBgStyled}{
    border-color: ${colors.gatsby} ${colors.ui.whisper} ${colors.ui.whisper} ${colors.gatsby};
  }
  &:hover ${HeaderTitleStyled}{
    color: ${colors.lemon};
  }
  &:hover ${PriceContainerStyled} span{
    transform: scale(3);
  }
`

const PriceSectionTitleHeader = ({
  title,
  isActived,
  price
  })=> {
  const HeaderContentStyled = styled(`header`)`
    position: relative;
    margin: 0 0 4rem;
  `


  const HeaderBgActivedStyled = styled(`div`)`
    border-style: solid;
    border-width: 90px 1411px 23px 399px;
    position: absolute;
    border-color: ${colors.gatsby} ${colors.ui.whisper} ${colors.ui.whisper} ${colors.gatsby};
    color: ${colors.lemon};
  `

  return (
    <HeaderContentStyled>
      {isActived? <HeaderBgActivedStyled/> : <HeaderBgStyled/>}
      <HeaderTitleStyled css={{
        color: isActived?colors.lemon:colors.gatsby}
        }>
        {title}
      </HeaderTitleStyled>
    </HeaderContentStyled>
  )
}

const PriceSectionHeader = ({title, price, isActived})=>{
  const HeaderStyled = styled(`header`)`
    background-color: ${colors.ui.whisper};
  `
  return (
    <HeaderStyled>
      <PriceSectionTitleHeader title={title} isActived={isActived}/>
      <PriceSectionPriceHeader price={price}/>
    </HeaderStyled>
  )
}


const UlStyled = styled(`ul`)`
  list-style: none;
  padding: 0;
  margin: 0;
`

const LiStyled = styled(`li`)`
  color: ${colors.gray.bright};
  padding: 15px 0;
  & span{
    color: ${colors.gatsbyDarker};
  }
  :hover {
    background-color: ${colors.ui.light};
    border-left: 5px solid ${colors.gatsby};
  }
`

const PriceSectionDetail = ({
  listItems
  })=>{
  return (
    <UlStyled>
      {
        listItems.map((item, i)=>{
          return (
            <LiStyled key={i} dangerouslySetInnerHTML={{__html: item}} />
          )
        })
      }
    </UlStyled>
  )
}


const PriceSection = ({
  title,
  price,
  isActived,
  listItems,
  children
})=>{
  return (
    <PriceSectionRoot>
      <PriceSectionHeader title={title} price={price} isActived={isActived}/>
      <PriceSectionDetail listItems={listItems}></PriceSectionDetail>
      {children}
    </PriceSectionRoot>
  )
}



const PriceCompareDetail = ()=>{
    return (<HomepageSection 
      sectionName="price"
      sectionIcon={PriceIcon}
      inverseStyle={false}
      title="套餐选择"
    >
      <PriceSections>
        <PriceSection
          title="免费用户"
          price="￥ 0.0/年"
          listItems={[
            "所有 <span>markdown</span> 基础，及扩展语法",
            "所有<span>第三方存储</span>同步",
            "所有<span>图床</span>存储",
            "所有<span>客户端</span>导出",
            "文档<span>历史记录</span>",
          ]}
        >
          <div css={{
            margin: `${rhythm(options.blockMarginBottom)} 0`,
          }}>
            <Button large to="/download/">
              下载使用
            </Button>
            </div>
        </PriceSection>
        <PriceSection
          title="付费用户"
          price="￥ 40.0/年"
          isActived={true}
          listItems={[
            "免费版本<span>所有</span>功能",
            "小书匠专用<span>高级语法</span>",
            "自定义<span>数据中心</span>",
            "<span>定制化 PDF </span>导出<br><small>(加密，水印，封面等)</small>",
            "<span>drawio</span> 绘图功能",
            "<span>可视化</span>表格编辑器",
            "<span>图片涂鸦</span> 功能",
            "<span>新功能</span>第一时间体验",
          ]}
        >
          <div css={{
            margin: `${rhythm(options.blockMarginBottom)} 0`,
          }}>
          <Button large to="/blog/vip/price/flow/">
              查看付费流程
            </Button>
          </div>
        </PriceSection>
      </PriceSections>
    </HomepageSection>)
}

export default PriceCompareDetail
