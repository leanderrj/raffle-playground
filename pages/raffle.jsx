import React from 'react';
import {
  Page,
  InlineGrid,
  BlockStack,
  InlineStack,
  Card,
  TextField,
  Thumbnail,
  MediaCard,
  SkeletonDisplayText,
  Box,
  Select,
  Bleed,
  Divider,
  SkeletonBodyText,
} from '@shopify/polaris';
import { ArchiveMinor, DeleteMinor } from '@shopify/polaris-icons';

const postOptions = [
  {label: 'Active', value: 'active'},
  {label: 'Draft', value: 'draft'},
];
const raffleOptions = [
  {label: 'Open', value: 'open'},
  {label: 'Closed', value: 'closed'},
];

function ResourceDetailsLayout() {

  const RaffleTitle = (props) => {
    return (
     <Tag>Wholesale</Tag>

    );
  };
  const SkeletonLabel = (props) => {
    return (
      <Box
        background="bg-fill-tertiary"
        minHeight="1rem"
        maxWidth="5rem"
        borderRadius="base"
        {...props}
      />
    );
  };
  return (
    <Page
      backAction={{ content: "Raffles", url: "/raffles" }}
      title="Nike x Sacai Zoom Cortez (Iron Grey/White-Light Cream)"
      secondaryActions={[
        {
          content: "Archive",
          icon: ArchiveMinor,
          accessibilityLabel: "Secondary action label",
          onAction: () => alert("Archive action"),
        },
        {
          content: "Delete",
          icon: DeleteMinor,
          destructive: true,
          accessibilityLabel: "Secondary action label",
          onAction: () => alert("Delete action"),
        },
      ]}
      pagination={{
        hasPrevious: true,
        hasNext: true,
      }}
    >
      <InlineGrid columns={{ xs: 1, md: "2fr 1fr" }} gap="400">
        <BlockStack gap="400">
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextField
                value="Nike x Sacai Zoom Cortez (Iron Grey/White-Light Cream)"
                label="Title"
                type="title"
                />
              <TextField
                value="email"
                label="Email"
                autoComplete="email"
                helpText={
                  <span>
                    We’ll use this email address to inform you on future changes to
                    Polaris.
                  </span>
                }
              />
            </BlockStack>
          </Card>


          <MediaCard
            title="Nike x Sacai Zoom Cortez (Iron Grey/White-Light Cream)"
            primaryAction={{
              content: 'Learn about getting started',
              onAction: () => {},
            }}
            description="Discover how Shopify can power up your entrepreneurial journey."
          >
            <img
              alt=""
              width="100%"
              height="100%"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src="https://picsum.photos/650?random=1"
            />
          </MediaCard>


          <Card roundedAbove="sm" background="bg-surface-secondary">
            <h2>Product</h2>
            <InlineStack gap="400" wrap={false} blockAlign="center" >
              <Thumbnail
                source="https://picsum.photos/650?random=1"
                size="large"
                alt="Black choker necklace"
              />
              <h3>Nike x Sacai Zoom Cortez (Iron Grey/White-Light Cream)</h3>
            </InlineStack>

            <h2>Variants</h2>
            <InlineStack gap="400" wrap={false} blockAlign="center" >
              <TextField
                value="1267334128"
                label="product id"
                type="id"
                />
              <TextField
                value="1267334128"
                label="variant id"
                type="variant_id"
                />
              <TextField
                value="12"
                label="in stock"
                type="available"
                />
              <TextField
                value="28"
                label="entries"
                type="entries"
                />
            </InlineStack>
          </Card>
        </BlockStack>
        <BlockStack gap={{ xs: "400", md: "200" }}>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <Select
                label="Post status"
                options={postOptions}
                value='active'
              />
              <Select
                label="Raffle status"
                options={raffleOptions}
                value='active'
              />
              <Box>
                <Bleed marginInline={{ xs: 400, sm: 500 }}>
                  <Divider />
                </Bleed>
              </Box>
              <p>2200 entries</p>
              <Divider />
              <SkeletonBodyText />
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <SkeletonLabel />
              <Box border="divider" borderRadius="base" minHeight="2rem" />
              <SkeletonLabel maxWidth="4rem" />
              <Box border="divider" borderRadius="base" minHeight="2rem" />
              <SkeletonLabel />
              <SkeletonBodyText />
            </BlockStack>
          </Card>
        </BlockStack>
      </InlineGrid>
    </Page>
  );
}

export default ResourceDetailsLayout;
