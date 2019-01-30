module.exports = `{
  allFront3Mattresses {
    id
    footerURL
    footertagline
    headerTagLine
    mattresses {
      uri
      uriBrandName
      id
      brandName
      priceRange
      subName
      subBrand
      coverImg {
        handle
      }
    }
  }
  allToppers(filter: {isPublished: true}) {
    isPublished
    id
    currentpromo
    linkType
    uRL
  }
  allCarousels(filter: {isPublished: true} orderBy: orderofImages_ASC) {
    isPublished
    orderofImages
    id
    image {
      handle
      width
      height
    }
    altTextForImage
    url
  }
  allFronts(filter: {isPublished: true}) {
    isPublished
    id
    title
    textBlock
  }
  allAdjBaseses(filter: {isPublished: true}) {
    isPublished
    id
    brandName
    warranty
    brandLine
    baseDescription
    uri
    value
    height
    features
    fullName
    keyfeatures
    salePrice
    price
    coverImg {
      height
      handle
      width
    }
    detail1 {
      height
      handle
      width
    }
    detail2 {
      height
      handle
      width
    }
  }
  allMattresses(filter: {isPublished: true}) {
    isOnSale {
      saleName
    }
    id
    freeBoxSpring
    uriBrandName
    uri
    brandName
    subName
    subBrand
    name
    discription
    features
    profile
    contruction
    mattOnly
    mattOnlySale
    setPrice
    setPriceSale
    warranty
    isPublished
    subLine {
      subLineName
    }
    orderByPrice
    priceRange
    coverImg {
      handle
      width
      height
    }	
    detail1 {
      handle
      width
      height
    }
    detail2 {
      handle
      width
      height
    }
  }
  allIsOnSales {
    id
    description
    tabTitle
    saleName
    currentSaleImg {
      handle
    }
    mattresses(filter: {isPublished: true} orderBy: orderByPrice_ASC) {
      brandName
      orderByPrice
      uriBrandName
      freeBoxSpring
      uri
      id
      subBrand
      subName
      priceRange
      coverImg {
        handle
      }
    }  
  }
  allPosts(filter: {isPublished: true} orderBy: dateAndTime_DESC) {
    id
    slug
    isPublished
    title
    dateAndTime
    coverImage { handle }
    
    content
    bottomimg {
      handle
      width
      height
    }
  }
  allPandaLogoes {
    id
    logoImage {
      width
      height
      id
      handle
    }
    altText
  }
  }`;
