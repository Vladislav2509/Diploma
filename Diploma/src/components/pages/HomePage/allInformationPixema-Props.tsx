type allInformationPixemaProps = {
    onClick: () => void,
    allInformationPixema: string,
    
  }


export const AllInformationPixemaProps= (props: allInformationPixemaProps) => {

    const {allInformationPixema, } = props;


    return (
        <div className='allInformationPixema' >
            {allInformationPixema}
        </div>

    )
};
