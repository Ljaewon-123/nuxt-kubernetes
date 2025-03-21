<template>
  <div>
    <nav>
      <NuxtLink to="/">/</NuxtLink>
      -
      <NuxtLink to="login">login</NuxtLink>
      -
      <NuxtLink to="test">test</NuxtLink>
      -
      <NuxtLink to="compare-fetch">compare-fetch</NuxtLink>
      -
      <NuxtLink to="hydrate">hydrate</NuxtLink>
      -
      <NuxtLink to="trpc">trpc</NuxtLink>
    </nav>
    <slot></slot>
  </div>
</template>