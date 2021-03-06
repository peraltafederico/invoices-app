import styled from '@emotion/styled'
import { PageProps, navigate } from 'gatsby'
import React from 'react'
import ActionsFooter from '../components/actionsFooter'
import { DetailsCard } from '../components/detailsCard'
import GoBack from '../components/goBack'
import StatusCard from '../components/statusCard'
import { useModalContext } from '../context/modalContext'
import DeleteInvoiceModal from '../components/deleteInvoice'
import useBreakpoints from '../hooks/useBreakpoints'
import InvoiceDrawer from '../components/invoiceDrawer'
import {
  MIN_LARGE_DISPLAY_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from '../theme/base'
import Layout from '../components/layout'
import { usePageContext } from '../context/pageContext'
import { Invoice } from '../interfaces'

const StyledGoBack = styled(GoBack)`
  margin-bottom: ${(props) => props.theme.space[13]};
`

const StyledWrapper = styled.div`
  margin-top: ${(props) => `-${props.theme.space[4]}`} !important;

  ${MIN_TABLET_MEDIA_QUERY} {
    max-width: ${(props) => props.theme.sizes[0]};
    margin: 0 auto;
  }
`

const StyledLayout = styled(Layout)`
  #content {
    ${MIN_TABLET_MEDIA_QUERY} {
      padding: 5.6rem 4rem 17.3rem 4rem;
    }

    ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
      padding: 7.2rem 0 0.4rem 0;
    }
  }
`

const Detail: React.FC<PageProps> = () => {
  const { showModal } = useModalContext()
  const { isMobileOnly } = useBreakpoints()
  const { status, bussinessId } = usePageContext<Invoice>()

  const handleDelete = () =>
    showModal({
      component: DeleteInvoiceModal,
    })

  const handleEdit = () =>
    showModal({
      component: InvoiceDrawer,
      props: {
        mode: 'edit',
      },
    })

  return (
    <StyledLayout>
      <StyledWrapper>
        <StyledGoBack to="/" />
        <StatusCard
          status={status}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <DetailsCard />
        {isMobileOnly && (
          <ActionsFooter
            actions={[
              {
                buttonVariant: 'secondary',
                text: 'Edit',
                onClick: () => navigate(`/invoices/${bussinessId}/edit`),
              },
              {
                buttonVariant: 'danger',
                text: 'Delete',
                onClick: handleDelete,
              },
              {
                buttonVariant: 'primary',
                text: 'Mark as Paid',
              },
            ]}
          />
        )}
      </StyledWrapper>
    </StyledLayout>
  )
}

export default Detail
